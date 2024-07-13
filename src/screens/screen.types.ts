import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramsList } from "../navigation/navigation.types";

export interface HomeScreenProps {
    navigation: StackNavigationProp<RootStackPramsList, 'HomeView'>
}

export interface SettingsScreenProps {
    navigation: StackNavigationProp<RootStackPramsList, 'SettingsView'>
}