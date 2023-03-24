import { StyleSheet} from 'react-native'
import Colors from '../../configurations/Colors';

const styles = StyleSheet.create({
    container:{
        height: 100,
        flexDirection: 'row',
        marginStart: 25,
        marginEnd: 25,
        marginTop: -25
    },
    input:{
        flex: 1,
        padding: 15,
        height: 54,
        backgroundColor: Colors.Base.gray500,
        borderRadius: 6,
        color: Colors.Base.gray100
    },
    button:{
        backgroundColor: Colors.Produto.blueDark,
        height: 54,
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 6
    },
    buttonText:{
        color: Colors.Base.gray100
    }
})


export default styles;