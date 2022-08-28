import * as React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Box,
  Icon,
  View,
  Text,
  Button,
  Heading,
  HStack,
  FlatList,
  VStack,
  Spacer,
  ScrollView
} from "native-base"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    serviceName: "AMA #234",
    timeStamp: "12:47 PM",
    recentText: "Completed GPS Challenge",
    icon: "transfer-up"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    serviceName: "TIM #10",
    timeStamp: "11:11 PM",
    recentText: "Completed GPS Challenge",
    icon: "transfer-up"  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    serviceName: "AMA #143",
    timeStamp: "6:22 PM",
    recentText: "Completed Bus Full Challenge",
    icon: "transfer-up"  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    serviceName: "TIM #10",
    timeStamp: "8:56 PM",
    recentText: "Paid for ride",
    icon: "transfer-down"  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    serviceName: "Tren Urbano",
    timeStamp: "12:47 PM",
    recentText: "Paid for ride with Challenge",
    icon: "transfer"  },
]

export interface TransactionListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const TransactionList = observer(function TransactionList(props: TransactionListProps) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    // <ScrollView
    //   h="80"
    //   _contentContainerStyle={{
    //     mb: "4",
    //     minW: "72",
    //   }}
    // >
      <Box>
        <Heading fontSize="sm" p="4" pb="3">
          Transactions
        </Heading>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
              <Icon as={MaterialCommunityIcons} name={item.icon} color="coolGray.800"/>
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.serviceName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    // </ScrollView>
  )
})
