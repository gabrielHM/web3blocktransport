import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text, WalletBarcode, WalletGeneralCard, TransactionList } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Container, Box, Button } from "native-base"
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    const goToChallenges = () => navigation.navigate("challenges")
    return (
      <Box safeAreaTop>
        <WalletGeneralCard></WalletGeneralCard>
        <Button bg="warmGray.50" onPress={goToChallenges}>
          <WalletBarcode></WalletBarcode>
        </Button>
        <TransactionList></TransactionList>
      </Box>
    )
  },
)
