import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import CircularProgress from 'material-ui/CircularProgress';

class Material extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    const iconStyles = {
      marginRight: 24,
    }
    const Styles = {
      marginRight: 24,
    }
    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    }
    return(
      <div>
        <MuiThemeProvider>
           <div>
              <RaisedButton label="Back" primary={true} style={Styles} />
              <RaisedButton label="Home" primary={true} style={Styles} />
              <RaisedButton icon={<ActionAndroid />} style={Styles} /><br/><br/>
              <ActionHome style={iconStyles}/>
              <ActionFlightTakeoff color={red500} style={iconStyles}/>
              <FileCloudDownload color={yellow500} style={iconStyles}/>
              <HardwareVideogameAsset color={blue500} style={iconStyles}/><br/><br/>
              <div style={styles.block}>
                <Checkbox label="Simple" style={styles.checkbox}/>
                <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Custom icon" style={styles.checkbox}/>
                <Checkbox checkedIcon={<Visibility />} uncheckedIcon={<VisibilityOff />} label="Custom icon of different shapes" style={styles.checkbox}/>
                <Checkbox label="Disabled unchecked" disabled={true} style={styles.checkbox}/>
                <Checkbox label="Disabled checked" checked={true} disabled={true} style={styles.checkbox}/>
                <Checkbox label="Label on the left" labelPosition="left" style={styles.checkbox}/>
              </div>
              <CircularProgress />
           </div>
         </MuiThemeProvider>
      </div>
    )
  }
}

export default Material;
