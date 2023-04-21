import { StyleSheet, Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get('window');



const styles_web = StyleSheet.create({

});
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: 'rgba(0, 71, 110, 0.8)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
  bottomContainer: {
    
    height: height / 3

  },
  textinput: {
    ...Platform.select({
      ios: {
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        paddingLeft: 10
      },
      android: {
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        paddingLeft: 10
      },
      default: {
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        paddingLeft: 10

      }
    })

  },

  formButton: {
    ...Platform.select({
      ios: {
        backgroundColor: 'rgba(0, 71, 110, 0.8)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      android: {
        backgroundColor: 'rgba(0, 71, 110, 0.8)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      default: {
        backgroundColor: 'rgba(0, 71, 110, 0.8)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }
    })

  },

  formInputContainer: {
    ...Platform.select({
      ios: {
        marginBottom: 70,
        ...StyleSheet.absoluteFill,
        zIndex: -1,
        justifyContent: 'center',
      },
      android: {
        marginBottom: 70,
        ...StyleSheet.absoluteFill,
        zIndex: -1,
        justifyContent: 'center',
      },
      default: {
        paddingLeft: 720,
        paddingRight: 720,
        paddingTop: 250
      }

    })

  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 6.27,
    elevation: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    top: -20
  }
});

export default styles;