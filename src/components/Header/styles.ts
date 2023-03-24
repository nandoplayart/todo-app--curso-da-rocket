import { StyleSheet } from 'react-native';
import Colors from '../../configurations/Colors';

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: Colors.Base.gray700,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 180
        
      },
      title:{
        fontSize: 44,
        fontWeight: 'bold',
      },
      to:{
        color: Colors.Produto.blue
      },
      do:{
        color: Colors.Produto.purple
      },
      logo:{
        width: 55,
        height: 55
      }
});

export default styles;