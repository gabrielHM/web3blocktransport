import * as React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

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
    challengeName: "Contribute Real-Time GPS Location",
    timeStamp: "12:47 PM",
    reward: 0.1,
    icon: "map-marker-radius"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    challengeName: "Is transport full? (1-5)",
    timeStamp: "11:11 PM",
    reward: 0.05,
    icon: "bus-alert"  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    challengeName: "From Stop To Stop",
    timeStamp: "6:22 PM",
    reward: 0.05,
    icon: "map-marker-distance"  }
]

export interface ChallengeListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ChallengeList = observer(function ChallengeList(props: ChallengeListProps) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      {/* <ScrollView
        h="80"
        _contentContainerStyle={{
          mb: "4",
          minW: "72",
        }}
      > */}
      <Box>
        <Heading fontSize="lg" p="4" pb="3">
          Challenges
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
                    {item.challengeName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    Reward: {item.reward} <MaterialCommunityIcons name={"ethereum"}/>
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
      {/* </ScrollView> */}
    </View>
  )
})
