import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from "../../styles/global";


interface SecondaryButtonProps {
    title: string
    isDisabled?: boolean
    onPress: () => void
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    const {
        title = 'Secondary Button',
        isDisabled = false,
        onPress = () => { }
    } = props
    return (
        <Pressable
            style={globalStyles.secondayButton}
            disabled={isDisabled}
            onPress={onPress}
        >
            <Text style={globalStyles.secondaryText}>{title}</Text>
        </Pressable>
    )
}

export default SecondaryButton