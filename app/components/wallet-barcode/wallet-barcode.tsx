import * as React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Box, View, Text, Button } from "native-base"
import Barcode from '@kichiyaki/react-native-barcode-generator';

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface WalletBarcodeProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const WalletBarcode = observer(function WalletBarcode(props: WalletBarcodeProps) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View p={1}>
      <Box p={1}>
      <Barcode
        format="CODE128B"
        value="0x2Fca9E54a8975D5Ea949E2CA43aedFeAcf8a8825"
        text="0x2Fca9E54a8975D5Ea949E2CA43aedFeAcf8a8825"
        maxWidth={345}
        style={{}}
      />
      </Box>
    </View>
  )
})
