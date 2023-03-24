import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../configurations/Colors';

const styles = StyleSheet.create({
    container:{

    },
    check:{
        flex: 1,
        maxWidth: 20,
        height: 20,
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      noCheck:{
        
        backgroundColor:  Colors.Base.gray400,
        borderColor: Colors.Produto.blue,
        borderWidth: 2,
      },
      yesCheck:{
        backgroundColor: Colors.Produto.purpleDark,
      
      },
})


export default styles;