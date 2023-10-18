import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={()=> handleCardPress(item)}
    >
      <TouchableOpacity
      style={styles.logoContainer(selectedJob, item)}
      >
        <Image 
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://imgs.search.brave.com/x9ETH_YzpZvS4xEsd1rRdztN-vd-r39w89-obCrBh7w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEzOTgwOS9p/c29sYXRlZC9wcmV2/aWV3L2JiMDlmZGYy/ZmI4ZWI3ZDQ5NzMw/YjBkYjY2NmQzNzRh/LWRpc2Vuby1wbGFu/by1tYWxldGluLnBu/Zw'}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text
      style={styles.companyName}
      numberOfLines={1}
      >{item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>

    </TouchableOpacity>
  )
}
//1:11
export default PopularJobCard