import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={handleNavigate}
    >
      <TouchableOpacity
      style={styles.logoContainer}
      >
        <Image 
          source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://imgs.search.brave.com/x9ETH_YzpZvS4xEsd1rRdztN-vd-r39w89-obCrBh7w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEzOTgwOS9p/c29sYXRlZC9wcmV2/aWV3L2JiMDlmZGYy/ZmI4ZWI3ZDQ5NzMw/YjBkYjY2NmQzNzRh/LWRpc2Vuby1wbGFu/by1tYWxldGluLnBu/Zw'}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>


      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employement_type}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard