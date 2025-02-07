/*!
 * Copyright 2022 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConfigModel, ConfigOptions, ConfigTexts } from '../static';

interface ConfigFullModel extends ConfigOptions {
  texts: ConfigTexts;
};

const configDefaults: ConfigFullModel = {
  maxTabs: 1000,
  maxUserInput: 4096,
  showPromptField: true,
  autoFocus: true,
  feedbackOptions: [
    {
      value: 'inaccurate-response',
      label: 'Inaccurate response',
    },
    {
      value: 'harmful-content',
      label: 'Harmful content'
    },
    {
      value: 'overlap',
      label: 'Overlaps with existing content'
    },
    {
      value: 'incorrect-syntax',
      label: 'Incorrect syntax'
    },
    {
      value: 'buggy-code',
      label: 'Buggy code'
    },
    {
      value: 'low-quality',
      label: 'Low quality'
    },
    {
      value: 'other',
      label: 'Other'
    }
  ],
  texts: {
    mainTitle: 'AWS Q',
    copy: 'Copy',
    insertAtCursorLabel: 'Insert at cursor',
    feedbackFormTitle: 'Report an issue',
    feedbackFormOptionsLabel: 'What type of issue would you like to report?',
    feedbackFormCommentLabel: 'Description of issue (optional):',
    feedbackThanks: 'Thanks!',
    feedbackReportButtonLabel: 'Report an issue',
    codeSuggestions: 'Code Suggestions',
    files: 'file(s)',
    changes: 'Changes',
    clickFileToViewDiff: 'Click on a file to view diff.',
    showMore: 'Show more',
    save: 'Save',
    cancel: 'Cancel',
    submit: 'Submit',
    pleaseSelect: 'Please select...',
    stopGenerating: 'Stop generating',
    copyToClipboard: 'Copied to clipboard',
    noMoreTabsTooltip: 'You\'ve reached maximum number of tabs you can simultaneously use.',
    codeSuggestionWithReferenceTitle: 'Some suggestions contain code with references.',
    spinnerText: 'Amazon Q is generating your answer...',
    tabCloseConfirmationMessage: 'Are you sure want to close the tab? Closing the tab would mean that your running job will stop.',
    tabCloseConfirmationCloseButton: 'Close tab',
    tabCloseConfirmationKeepButton: 'Keep tab'
  }
};
export class Config {
  private static instance: Config;
  public config: ConfigFullModel;
  private constructor (config?: Partial<ConfigModel>) {
    this.config = {
      ...configDefaults,
      ...config,
      texts: {
        ...configDefaults.texts,
        ...config?.texts
      }
    };
  }

  public static getInstance (config?: Partial<ConfigModel>): Config {
    if (Config.instance === undefined) {
      Config.instance = new Config(config);
    }

    return Config.instance;
  }
}
