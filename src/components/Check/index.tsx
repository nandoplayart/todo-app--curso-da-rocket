import {  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {Feather} from '@expo/vector-icons';

import styles from './styles';
import Colors from '../../configurations/Colors';

type Props ={
    done: boolean,
    onCheck: (check: boolean) => void
}

const Check = ({done, onCheck}:Props) => {

    const [check, setCheck] = useState(done);

    const handler = ()=>{
        setCheck((current) => !current);
        onCheck(!check);
    }
  return (
            <TouchableOpacity 
                onPress={handler}
                style={[styles.check, check? styles.yesCheck: styles.noCheck]}>
                  {check && <Feather size={12} name='check' color={Colors.Base.gray100}></Feather>}
            </TouchableOpacity>
  )
}

export default Check

