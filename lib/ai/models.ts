import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import { google } from '@ai-sdk/google';
import { mistral } from '@ai-sdk/mistral';
import { cohere } from '@ai-sdk/cohere';
import { anthropic } from '@ai-sdk/anthropic';
import { xai } from '@ai-sdk/xai';
import { perplexity } from '@ai-sdk/perplexity';

import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('o1-mini'),
    'chat-model-large': openai('o3-mini'),
    'chat-model-reasoning': wrapLanguageModel({
      model: fireworks('accounts/fireworks/models/deepseek-r1'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'chat-model-deepseek-v3': fireworks('accounts/fireworks/models/deepseek-v3'),
    'chat-model-llama-v3p1': fireworks('accounts/fireworks/models/llama-v3p1-405b-instruct'),
    'chat-model-qwen-v2p5': fireworks('accounts/fireworks/models/qwen2p5-coder-32b-instruct'),
    'title-model': openai('gpt-4-turbo'),
    'block-model': openai('gpt-4o-mini'),
    'chat-model-google-gemini-1.5-pro': google('gemini-1.5-pro'),
    'chat-model-mistral-large': mistral('mistral-large-latest'),
    'chat-model-cohere-command-r-plus': cohere('command-r-plus'),
    'chat-model-anthropic-sonnet': anthropic('claude-3-5-sonnet-20241022'),
    'chat-model-anthropic-opus': anthropic('claude-3-opus-20240229'),
    'chat-model-xai-grok': anthropic('grok-2-1212'),
    'chat-model-perplexity-sonar': anthropic('sonar-pro')
  },
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'ChatGPT o1-mini',
    description: 'Fastest OpenAI model for small and quick tasks',
  },
  {
    id: 'chat-model-large',
    name: 'ChatGPT o3-mini',
    description: 'Latest and most advanced model by OpenAI',
  },
  {
    id: 'chat-model-reasoning',
    name: 'DeepSeek R1',
    description: 'Uses advanced reasoning',
  },
  // New Fireworks model entries added below
  {
    id: 'chat-model-deepseek-v3',
    name: 'DeepSeek V3',
    description: 'Fireworks DeepSeek V3 model for advanced reasoning tasks',
  },
  {
    id: 'chat-model-llama-v3p1',
    name: 'Llama V3.1 405B',
    description: 'Llama model with most parameters',
  },
  {
    id: 'chat-model-google-gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    description: 'The model with longest context'
  },
  {
    id: 'chat-model-mistral-large',
    name: 'Mistral Large',
    description: 'Most capable Mistral model'
  },
  {
    id: 'chat-model-cohere-command-r-plus',
    name: 'Command R+',
    description: 'Cohere\'s most powerful model'
  },
  {
    id: 'chat-model-qwen-v2p5',
    name: 'Qwen Coder 2.5',
    description: 'The best coding model'
  },
  {
    id: 'chat-model-anthropic-sonnet',
    name: 'Claude Sonnet 3.5',
    description: 'Latest Anthropic model'
  },
  {
    id: 'chat-model-anthropic-opus',
    name: 'Claude Opus 3',
    description: 'Largest Anthropic model'
  },
  {
    id: 'chat-model-perplexity-sonar',
    name: 'Sonar Pro',
    description: 'Latest search engine by Perplexity'
  },
  {
    id: 'chat-model-xai-grok',
    name: 'Grok 2',
    description: 'Latest Twiiter\'s model'
  }
];
