import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { RoundEdgeView, TextInputBox } from '../../../Component/DataDisplay'
import theme from '../../../assets/theme'
import { TouchableOpacity } from 'react-native'



export default ()=> {
    const [query, setquery] = React.useState('')
    return (
        <RoundEdgeView>
            <TextInputBox 
                
                value={query}
                placeholder="search for jobs"
                onChangeText={setquery}
             />
            <TouchableOpacity onPress={()=>{
                setquery('')
                alert("search for"+query)
                }}>
                <FontAwesome5 name="search" size={20} />
            </TouchableOpacity>
        </RoundEdgeView>
    )
}
