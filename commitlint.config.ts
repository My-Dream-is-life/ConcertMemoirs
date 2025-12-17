import type { ParserPreset, UserConfig } from '@commitlint/types';
import config from '@commitlint/config-conventional';
import { merge } from 'lodash-es';
import createPreset from 'conventional-changelog-conventionalcommits';

// Define the optional value of the type of commit.(eg: feat: add new Button component)
const types = [
  'feat',
  'fix',
  'perf',
  'style',
  'docs',
  'test',
  'refactor',
  'build',
  'ci',
  'chore',
  'revert',
  'types',
  'release',
];

// Define the optional value of the scope of commit.(eg: feat(components): add new Button component)
const scopes = ['assets', 'components', 'constants', 'pages', 'router', 'hook', 'config'];

// A helper function to create the custom emoji parser preset.
async function createEmojiParser(): Promise<ParserPreset> {
  // Generates the regex from the emojis defined in the conventional config.
  const emojiRegexPart = Object.values(config.prompt.questions.type.enum)
    .map((value) => value.emoji.trim())
    .join('|');

  const parserOpts = {
    // This regular expression validates commit headers with an emoji.
    breakingHeaderPattern: new RegExp(
      `^(?:${emojiRegexPart})\\s+(\\w*)(?:\\((.*)\\))?!:\\s+(.*)$`
    ),
    headerPattern: new RegExp(
      `^(?:${emojiRegexPart})\\s+(\\w*)(?:\\((.*)\\))?!?:\\s+(.*)$`
    ),
  };

  const emojiParser = merge({}, await createPreset(), {
    conventionalChangelog: { parserOpts },
    parserOpts,
    recommendedBumpOpts: { parserOpts },
  });

  return emojiParser;
}

const emojiParser = await createEmojiParser();

export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: emojiParser,
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [2, 'always', types],
    'scope-enum': [2, 'always', scopes],
  },
  prompt: {
    questions: {
      type: {
        description: "Please Select the type of change that you're committing:",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨ ',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛 ',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀 ',
          },
          style: {
            description: 'Changes that do not affect the meaning of the code',
            title: 'Styles',
            emoji: '🎨 ',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📝 ',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '✅ ',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '♻️ ',
          },
          build: {
            description: 'Changes that affect the build system or external dependencies',
            title: 'Builds',
            emoji: '🛠️ ',
          },
          ci: {
            description: 'Changes to our CI configuration files and scripts',
            title: 'Continuous Integration',
            emoji: '⚙️ ',
          },
          chore: {
            description: 'Other changes that do not modify src or test files',
            title: 'Chores',
            emoji: '📦 ',
          },
          revert: {
            description: 'Revert to a commit',
            title: 'Reverts',
            emoji: '🗑️ ',
          },
          types: {
            description: 'A New Types',
            title: 'Types',
            emoji: '🫧 ',
          },
          release: {
            description: 'A New Code Release',
            title: 'Releases',
            emoji: '⬆️ ',
          },
        },
      },
      scope: {
        description: '\nDenote the SCOPE of this change (optional):',
      },
      subject: {
        description: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      },
      body: {
        description:
          'Provide a LONGER description of the change (optional). Use "\n" to break new line:\n',
      },
      breaking: {
        description: 'List any BREAKING CHANGES (optional):\n',
      },
      footer: {
        description:
          'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
      },
    },
  },
} satisfies UserConfig;
