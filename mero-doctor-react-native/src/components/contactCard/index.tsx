import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CrossIcon from '../../assets/svg/CrossIcon'
import {styles} from './styles'
import { ContactCardProps } from './types'
import ContactInfo from '../contactInfo'

const ContactCard = ({title}:ContactCardProps) => {
  return (
    <View style={{gap:8}}>
        <View style={styles.row}>
            <CrossIcon/>
            <Text style={styles.title}>For Emergency Numbers Please Call</Text>
        </View>
        <Text style={styles.text}>Use the number below to contact in case of medical emergency</Text>
        <View style={{gap:4}}>
        <ContactInfo icon={<CrossIcon/>} title='Blood Bank' contact={['091-239723','091-321987','091-576678','091-543568','9800623354']}/>
        <ContactInfo icon={<CrossIcon/>} title='Ambulance' contact={['091-237894']}/>
        <ContactInfo icon={<CrossIcon/>} title='Hospital' contact={['091-263879']}/>
        </View>
    </View>
  )
}

export default ContactCard
