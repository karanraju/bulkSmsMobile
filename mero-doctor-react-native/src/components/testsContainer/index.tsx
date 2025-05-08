import {Text, View } from 'react-native';
import React from 'react';
import {styles} from './styles'

export interface TestsContainerProps {
  tests: string[];
  title?: string;
  containerStyle?: object;
}

// const TestsContainer = ({ tests, title, containerStyle }: TestsContainerProps) => {
//   return (
//     <>
//       {title && <Text style={styles.testsTitle}>{title}</Text>}
//       <View style={[styles.testsContainer, containerStyle]}>
//         {tests.map((test, index) => (
//           <View key={index} style={styles.testItem}>
//             <Text style={styles.testText}>{test}</Text>
//           </View>
//         ))}
//       </View>
//     </>
//   );
// };

const TestsContainer = ({ tests, title, containerStyle }: TestsContainerProps) => {
  return (
    <>
      {title && <Text style={styles.testsTitle}>{title}</Text>}
      <View style={[styles.testsContainer, containerStyle]}>
        {tests.map((test, index) => {
          const isLastItem = index === tests.length - 1;
          return (
            <View
              key={index}
              style={[
                styles.testItem,
                !isLastItem && styles.testItemWithBorder,
              ]}
            >
              <Text style={styles.testText}>{test}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};


export default TestsContainer;