import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import { mistral} from '@ai-sdk/mistral';
import { anthropic } from '@ai-sdk/anthropic';
import { cohere } from '@ai-sdk/cohere';
import { google } from '@ai-sdk/google'
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('gpt-4o-mini'),
    'chat-model-large': openai('gpt-4o'),
    'chat-model-reasoning': wrapLanguageModel({
      model: fireworks('accounts/fireworks/models/deepseek-r1'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': openai('gpt-4-turbo'),
    'block-model': openai('gpt-4o-mini'),
    'gemini-2': google('gemini-2.0-flash-001'),
    'cohere-command': cohere('command'),
    'claude-sonnet': anthropic('claude-3-sonnet-20240229'),
    'mistral-large': mistral('mistral-large-latest'),
    'deepseek-v3-model': fireworks('accounts/fireworks/models/deepseek-v3'),
    'llama-v3p1-model': fireworks('accounts/fireworks/models/llama-v3p1-405b-instruct'),
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
    name: 'Small model',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'chat-model-large',
    name: 'Large model',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'DeepSeek R1',
    description: 'Uses advanced reasoning',
  },
  {
    id: 'deepseek-v3-model',
    name: 'DeepSeek V3',
    description: 'Latest DeepSeek model',
  },
  {
    id: 'llama-v3p1-model',
    name: 'Llama 3.1 405B',
    description: 'Llama model with most parameters',
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    description: 'Latest model of Mistral',
  },
  {
    id: 'cohere-command',
    name: 'Cohere Command',
    description: 'Advanced coding model',
  },
  {
    id: 'gemini-2',
    name: 'Gemini 2 Flash',
    description: 'Model with most context',
  },
  {
    id: 'claude-sonnet',
    name: 'Claude Sonnet 3.5',
    description: 'Advanced Anthropic model',
  },
];
