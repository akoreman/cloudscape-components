// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import * as React from 'react';
import styles from './styles.scss';

import ButtonDropdown, { ButtonDropdownProps } from '~components/button-dropdown';
import ScreenshotArea from '../utils/screenshot-area';

const items: (twoChecked: boolean, fourChecked: boolean) => ButtonDropdownProps['items'] = (
  twoChecked: boolean,
  fourChecked: boolean
) => {
  return [
    {
      id: 'id1',
      text: 'Option without checkbox',
    },
    {
      id: 'id2',
      text: 'Option with checkbox',
      checkbox: true,
      checkboxState: twoChecked,
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
      checkboxState: fourChecked,
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
};

export default function ButtonDropdownPage() {
  const [twoChecked, setTwoChecked] = React.useState(true);
  const [fourChecked, setFourChecked] = React.useState(true);

  const onClick = React.useCallback(event => {
    if (event.detail.checkboxState !== undefined) {
      if (event.detail.id === 'id2') {
        setTwoChecked(event.detail.checkboxState);
      } else if (event.detail.id === 'id4') {
        setFourChecked(event.detail.checkboxState);
      }
    }
  }, []);

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
        Note: the checkbox states are shared between the three ButtonDropdowns
        <div className={styles.container}>
          <ButtonDropdown id="ButtonDropdown2" items={items(twoChecked, fourChecked)} onItemClick={onClick}>
            ButtonDropdown
          </ButtonDropdown>
        </div>
        <div className={styles.container}>
          <ButtonDropdown
            id="ButtonDropdown3"
            items={[
              {
                text: 'Nested optons',
                items: items(twoChecked, fourChecked),
              },
            ]}
            onItemClick={onClick}
          >
            With nested options
          </ButtonDropdown>
        </div>
        <div className={styles.container}>
          <ButtonDropdown
            id="ButtonDropdown4"
            expandableGroups={true}
            items={[
              {
                text: 'Expanded optons',
                items: items(twoChecked, fourChecked),
              },
            ]}
            onItemClick={onClick}
          >
            With expandable groups
          </ButtonDropdown>
        </div>
      </article>
    </ScreenshotArea>
  );
}
