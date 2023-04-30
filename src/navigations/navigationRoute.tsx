import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from './type';

export function Routingprop() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return navigation;
}
