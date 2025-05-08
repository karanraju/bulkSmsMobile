import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StarIcon from '../../assets/svg/StarIcon';
import WatchIcon from '../../assets/svg/WatchIcon';
import {styles} from './styles'

const DoctorCard = ({name,speciality,reviews,yoe,imageSource}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
      <Image
            // source={{ uri: 'https://avatar.iran.liara.run/public/29' }}
            source={imageSource}
            style={styles.profileImage}
      />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.specialization}>{speciality}</Text>
          <View style={styles.ratingContainer}>
            <StarIcon style={styles.starIcon} />
            <Text style={styles.reviewText}>{reviews} Reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.experienceTag}>
          <Text style={styles.experienceText}>{yoe}yrs exp+</Text>
        </View>
        <View style={styles.timeContainer}>
          <WatchIcon style={styles.watchIcon} />
          <Text style={styles.timeText}>6:00AM - 11:00 PM</Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;

