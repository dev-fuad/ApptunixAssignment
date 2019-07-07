import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { styles } from './styles';
import { vw } from '../../../utilities';
import CalendarTab from './CalendarTab';
import CheckListTab from './CheckListTab';

const HomeScreen = () => {
  const [tabState, setTabState] = useState({
    index: 0,
    routes: [
      { key: 'calendar', title: 'Calendar' },
      { key: 'checkList', title: 'Check List' },
    ],
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <TabView
        navigationState={tabState}
        renderScene={SceneMap({
          calendar: CalendarTab,
          checkList: CheckListTab,
        })}
        onIndexChange={index => setTabState({ ...tabState, index })}
        initialLayout={{ width: vw(100) }}
      />
    </View>
  );
};

export default HomeScreen;
