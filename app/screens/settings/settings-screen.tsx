import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {
  View,
  VStack,
  Center,
  Button,
  Text,
  Box,
  HStack,
  Select,
  Divider,
  Avatar,
} from "native-base"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const SettingsScreen: FC<StackScreenProps<NavigatorParamList, "settings">> = observer(
  function SettingsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    let [service, setService] = React.useState("")

    return (
      <View>
        <Box p={2} safeAreaTop>
          <VStack space={4} justifyContent="space-around">
            <Button onPress={() => navigation.navigate("walletConnect")}>Disconnect Wallet</Button>
            <HStack alignItems="center" justifyContent="space-around">
              <Text>Theme:</Text>
              <Select
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Theme"
                _selectedItem={{
                  bg: "teal.600",
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Light" value="light" />
                <Select.Item label="Dark" value="dark" />
                <Select.Item label="Use System Settings" value="system" />
              </Select>
            </HStack>
            <Text alignSelf="center" underline>
              Acknowledgements
            </Text>
            <Text alignSelf="center" underline>
              Privacy Policy
            </Text>
            <Text alignSelf="center">Sponsors</Text>
            <Divider />
            <HStack alignItems="center" justifyContent="space-around">
              <Avatar alignSelf="center" bg="blue.500" size="lg">
                ES
              </Avatar>
              <Avatar alignSelf="center" bg="green.500" size="lg">
                WA
              </Avatar>
              <Avatar alignSelf="center" bg="amber.500" size="lg">
                NE
              </Avatar>
            </HStack>
            <HStack alignItems="center" justifyContent="space-around">
              <Avatar alignSelf="center" bg="red.500" size="lg">
                ET
              </Avatar>
              <Avatar alignSelf="center" bg="purple.500" size="lg">
                HU
              </Avatar>
            </HStack>
          </VStack>
        </Box>
      </View>
    )
  },
)
