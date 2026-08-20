const fs = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const KNOWLEDGE_BASE = fs.readFileSync(path.join(__dirname, '../../knowledge-base.md'), 'utf8');
const CAREER_TAXONOMY = fs.readFileSync(path.join(__dirname, '../../career-taxonomy.md'), 'utf8');

const SYSTEM_PROMPT = `${KNOWLEDGE_BASE}

---

# Your knowledge document: career-taxonomy.md

${CAREER_TAXONOMY}

---

Respond in plain conversational text (not JSON, not markdown headers) in the voice described above. Keep it to 2-4 short paragraphs: name the 1-3 best-fit tracks with a brief rationale, suggest resource *types* and search terms (you have no live course/article/job database, so never invent a specific course, article, or job posting), and close with the required disclaimer that this is a starting point and not a placement guarantee.`;

const client = new Anthropic();

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let resumeText;
  try {
    ({ resumeText } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  if (!resumeText || typeof resumeText !== 'string' || !resumeText.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: 'resumeText is required' }) };
  }

  try {
    const response = await client.messages.create({
      model: 'claude-opus-5',
      max_tokens: 1024,
      output_config: { effort: 'medium' },
      system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
      messages: [
        {
          role: 'user',
          content: `Here is the profile signal to work from (resume text, pasted LinkedIn text, or self-description):\n\n${resumeText.slice(0, 12000)}`,
        },
      ],
    });

    const guidance = response.content.find((block) => block.type === 'text')?.text || '';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guidance }),
    };
  } catch (error) {
    console.error('career-guidance function error:', error);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'Guidance generation failed. Try again shortly.' }),
    };
  }
};
