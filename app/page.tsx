import React from 'react'
import Header from '@/components/header'
import Container from '@/components/container'
import BigText from '@/components/BigText'
import SmallText from '@/components/SmallText'

export default function page() {
    return (
        <Container>
            <Header />
            <BigText text='Электрондық пошта' style='text-center w-[375px]'/><br />
            <SmallText text='Жалғастыру үшін, сіздің телефон нөміріңді теріңіз'/>
        </Container>
    )
}
