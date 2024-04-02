// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import * as React from 'react';
import styles from './styles.scss';

import ButtonDropdown, { ButtonDropdownProps } from '~components/button-dropdown';
import ScreenshotArea from '../utils/screenshot-area';

const getItems = (firstChecked: boolean, secondChecked: boolean, thirdChecked: boolean, fourthChecked: boolean) => {
  const items: ButtonDropdownProps.Items = [
    {
      id: 'id1',
      text: 'Option with checkbox',
      checkbox: true,
      checkboxState: firstChecked,
    },
    {
      id: 'id2',
      text: 'Disabled option with checkbox',
      disabled: true,
      checkbox: true,
      checkboxState: secondChecked,
    },
    {
      id: 'id3',
      text: 'Option with checkbox and icon',
      checkbox: true,
      checkboxState: thirdChecked,
      iconName: 'gen-ai',
    },
    {
      id: 'id4',
      text: 'Disabled option with checkbox and icon',
      disabled: true,
      checkbox: true,
      checkboxState: fourthChecked,
      iconName: 'gen-ai',
    },
    {
      id: 'id5',
      text: 'Option without checkbox',
    },
  ];
  return items;
};

function ButtonDropdownComponent({ variant }: { variant: 'normal' | 'nested' | 'expandable' }) {
  const [firstChecked, setFirstChecked] = React.useState(true);
  const [secondChecked, setSecondChecked] = React.useState(true);
  const [thirdChecked, setThirdChecked] = React.useState(true);
  const [fourthChecked, setFourthChecked] = React.useState(true);

  const onClick = React.useCallback(event => {
    if (event.detail.checkboxState === undefined) {
      return;
    }
    switch (event.detail.id) {
      case 'id1':
        setFirstChecked(event.detail.checkboxState);
        break;

      case 'id2':
        setSecondChecked(event.detail.checkboxState);
        break;

      case 'id3':
        setThirdChecked(event.detail.checkboxState);
        break;

      case 'id4':
        setFourthChecked(event.detail.checkboxState);
        break;
    }
  }, []);

  return (
    <ButtonDropdown
      items={
        variant === 'normal'
          ? getItems(firstChecked, secondChecked, thirdChecked, fourthChecked)
          : [{ items: getItems(firstChecked, secondChecked, thirdChecked, fourthChecked), text: 'Category' }]
      }
      onItemClick={onClick}
      expandableGroups={variant === 'expandable'}
    >
      {variant}
    </ButtonDropdown>
  );
}

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
          <ButtonDropdownComponent variant="normal" />
        </div>
        <div className={styles.container}>
          <ButtonDropdownComponent variant="nested" />
        </div>
        <div className={styles.container}>
          <ButtonDropdownComponent variant="expandable" />
        </div>
      </article>
    </ScreenshotArea>
  );
}
