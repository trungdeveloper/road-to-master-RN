import React from "react";
import { Pressable, Text } from "react-native";
import { globalStyles } from "../../styles/global";


interface PrimaryButtonProps {
    style?: object,
    title: string;
    isDisabled?: boolean;
    onPress: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const {
        style,
        title = "Primary Button",
        isDisabled = false,
        onPress = () => { },
    } = props;
    return (
        <Pressable
            style={globalStyles.primaryButton}
            disabled={isDisabled}
            onPress={onPress}
        >
            <Text style={globalStyles.primaryText}>{title}</Text>
        </Pressable>
    );
};

export default PrimaryButton;
