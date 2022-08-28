import * as React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Box, Avatar, View, Text } from "native-base"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface TransportInfoCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const TransportInfoCard = observer(function TransportInfoCard(props: TransportInfoCardProps) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <Box safeAreaTop>
    <View style={styles} p={1} >
      <Box 
        bg={{
          linearGradient: {
            colors: ["green.400", "green.800"],
            start: [0, 0],
            end: [1, 1],
          },
        }}
        p="6"
        rounded="xl"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          textAlign: "center",
        }}
      >

        <Text fontSize="xl"
          fontWeight="medium"
          color="warmGray.50">AMA #143</Text>
        <Text>Service Type: Bus</Text>
      </Box>
    </View>
    </Box>

  )
})
