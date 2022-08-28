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

export interface WalletGeneralCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const WalletGeneralCard = observer(function WalletGeneralCard(
  props: WalletGeneralCardProps,
) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      <Box alignSelf="center" bg="gray.200" borderRadius="full" p={2}>
        <Text  fontSize="xl"
          fontWeight="medium"
          textAlign="center">0.0000000001 <MaterialCommunityIcons name={"ethereum"}/></Text>
      </Box>
      <Box
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        p="12"
        rounded="xl"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          textAlign: "center",
        }}
      >
        <Text fontSize="md"
          fontWeight="medium"
          color="warmGray.50">Balance</Text>
        <Text>Address:</Text>
      </Box>
    </View>
  )
})
