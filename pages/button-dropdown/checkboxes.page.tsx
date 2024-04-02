// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import * as React from 'react';
import styles from './styles.scss';

import ButtonDropdown, { ButtonDropdownProps } from '~components/button-dropdown';
import ScreenshotArea from '../utils/screenshot-area';

const items: ButtonDropdownProps['items'] = [
  {
    id: 'id1',
    text: 'Option without checkbox',
  },
  {
    id: 'id2',
    text: 'Option with checkbox',
    checkbox: true,
    checkboxState: true,
  },
  {
    id: 'id3',
    text: 'Disabled option with checkbox',
    disabled: true,
    checkbox: true,
    checkboxState: true,
  },
  {
    id: 'id4',
    text: 'Option with checkbox and icon',
    checkbox: true,
    checkboxState: true,
    iconName: 'gen-ai',
  },
  {
    id: 'id5',
    text: 'Disabled option with checkbox and icon',
    disabled: true,
    checkbox: true,
    checkboxState: true,
    iconName: 'gen-ai',
  },
];

const withNestedOptions: ButtonDropdownProps['items'] = [
  {
    text: 'Nested optons',
    items: items,
  },
];

const withExpandedGroups: ButtonDropdownProps['items'] = [
  {
    text: 'Expanded options',
    items: items,
  },
];

export default function ButtonDropdownPage() {
  return (
    <ScreenshotArea
      disableAnimations={true}
      style={{
        // extra space to include dropdown in the screenshot area
        paddingBottom: 100,
      }}
    >
      <article>
        <h1>ButtonDropdown witch checkboxes</h1>
        <div className={styles.container}>
          <ButtonDropdown id="ButtonDropdown2" items={items}>
            ButtonDropdown
          </ButtonDropdown>
        </div>
        <div className={styles.container}>
          <ButtonDropdown id="ButtonDropdown3" items={withNestedOptions}>
            With nested options
          </ButtonDropdown>
        </div>
        <div className={styles.container}>
          <ButtonDropdown id="ButtonDropdown4" expandableGroups={true} items={withExpandedGroups}>
            With expandable groups
          </ButtonDropdown>
        </div>
      </article>
    </ScreenshotArea>
  );
}
