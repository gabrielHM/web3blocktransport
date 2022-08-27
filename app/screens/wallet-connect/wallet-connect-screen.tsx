import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, ImageStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { Box, Button, VStack, Image, Center } from "native-base"
import * as neftify from "@neftify/connect"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const genericBusPana = require("./Bus-Stop-pana.png")

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const pana: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: 343,
  height: 230,
}

export const WalletConnectScreen: FC<StackScreenProps<NavigatorParamList, "walletConnect">> =
  observer(function WalletConnectScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const metamaskConnect = () => {
      console.log("Connect to wallet pressed.")
    }
    return (
      <Screen style={ROOT} preset="scroll">
        <Box alignItems="center" justifyContent="space-around">
          <VStack justifyContent="space-between">
            <Center>
              <Text preset="header" tx="common.appTitle" />
            </Center>
            <Center>
              <Image source={genericBusPana} alt="Alternate Text" size="xl" style={pana} />
            </Center>
            <Button testID="connectWithCustomButton" onPress={metamaskConnect}>
              <Text tx="walletConnect.connectWallet" />
            </Button>
          </VStack>
        </Box>
      </Screen>
    )
  })
