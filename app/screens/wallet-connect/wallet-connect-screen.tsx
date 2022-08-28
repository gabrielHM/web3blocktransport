import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, ImageStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { Box, Button, VStack, Image, Center, View, HStack} from "native-base"
import * as neftify from "@neftify/connect"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
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

// const connector = useWalletConnect();

export const WalletConnectScreen: FC<StackScreenProps<NavigatorParamList, "walletConnect">> =
  observer(function WalletConnectScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()

    const metamaskConnect = () => {
      console.log("Connect to wallet pressed.")
    }
    
    // const connectWalletAction = () => {
    //   console.log(connector.connected);
    //   if (!connector.connected){
    //     // Connect Here
    //     connector.connect();
    //   }
    //   else {
    //     navigation.navigate('home');
    //   }
    // }
    
    
    return (
      <View alignItems="center">
        <Box p={0} m={0} bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
        }}>
          <VStack flex={1}  justifyContent="space-around">
            <Center>
              <Text preset="header" tx="common.appTitle" />
            </Center>
            <Center>
              <Image source={genericBusPana} alt="Alternate Text" size="xl" style={pana} />
            </Center>
            <Button testID="connectWithCustomButton" onPress={() => {navigation.navigate('home')}}>
              <Text tx="walletConnect.connectWallet" />
            </Button>
          </VStack>
        </Box>
      </View>
    )
  })
