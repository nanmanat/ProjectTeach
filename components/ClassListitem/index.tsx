import React from 'react';
import { View, Text } from 'react-native';

import { ClassRoom } from '../../types';


export type ClassListitemProps = {
    ClassRoom: ClassRoom;
}

const ClassListitem = (props: ClassListitemProps) => {
    const { ClassRoom } = props;
    return(
        <View>
            <Text>{ClassRoom.lastMassage.content}</Text>
        </View>
    )
};

export default ClassListitem;