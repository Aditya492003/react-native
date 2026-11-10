import { useEffect, useState } from 'react'
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native'

const SIDEBAR_WIDTH = 280

const slides = [
  {
    id: 1,
    image: require('../assets/images/cyberpunk-bg.jpg'),
    title: 'CYBERPUNK',
    desc: 'an open-world, action-adventure RPG set in Night City, a violent, neon-lit megalopolis obsessed with power, glamor, and cybernetic body modification',
  },
  {
    id: 2,
    image: require('../assets/images/gtav-bg.jpg'), // replace with your image
    title: 'GTA V',
    desc: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.',
  },
  {
    id: 3,
    image: require('../assets/images/rdr2-bg.jpg'), // replace with your image
    title: 'Red Dead Redemption 2',
    desc: 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption',
  },
  {
    id: 4,
    image: require('../assets/images/fifa-bg.jpg'), // replace with your image
    title: 'FIFA 26',
    desc: 'EA Sports FC 26 (commonly referred to as "FIFA 26") is an association football simulation video game developed by EA Vancouver and EA Romania and published by EA Sports',
  },
]

const menuItems = ['Home', 'Games', 'Favorites', 'Downloads', 'Settings']

export default function Home() {
  const { width } = useWindowDimensions()

  // ---------- slider ----------
  const [index, setIndex] = useState(0)
  const [translateX] = useState(() => new Animated.Value(0))

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -index * width,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [index, width, translateX])

  // ---------- sidebar ----------
  const [isOpen, setIsOpen] = useState(false)
  const [sidebarX] = useState(() => new Animated.Value(-SIDEBAR_WIDTH))
  const [overlayOpacity] = useState(() => new Animated.Value(0))

  useEffect(() => {
    Animated.parallel([
      Animated.timing(sidebarX, {
        toValue: isOpen ? 0 : -SIDEBAR_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: isOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start()
  }, [isOpen, sidebarX, overlayOpacity])

  return (
    <View className='flex-1 bg-[#282836]'>
      <ScrollView className='flex-1' contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Header */}
        <View className='h-[100px] bg-[#282836] flex-row items-end justify-between p-4'>
          <Pressable onPress={() => setIsOpen(true)}>
            <Text className='text-4xl text-white ml-5'>☰</Text>
          </Pressable>

          <Pressable>
            <Image
              source={require('../assets/images/ghost.png')}
              style={{ width: 40, height: 40 }}
              resizeMode='contain'
            />
          </Pressable>
        </View>

        {/* Search banner */}
        <View className='relative h-72 w-full items-center justify-center overflow-hidden'>
          <Image
            source={require('../assets/images/homebg.jpg')}
            style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.3 }}
            resizeMode='cover'
          />

          <View className='bg-black w-4/5 px-4 py-2 opacity-50 rounded-full'>
            <TextInput
              className='text-white'
              placeholder='Search game here...'
              placeholderTextColor='white'
            />
          </View>
        </View>

        {/* Featured header */}
        <View className='flex-row items-center justify-between mt-4 mb-2 px-4'>
          <Text className='text-2xl text-white flex-shrink'>Featured Games</Text>

          <View className='bg-blue-950 rounded-full'>
            <Text className='text-base text-white px-4 py-2'>view all</Text>
          </View>
        </View>

        {/* Auto-sliding featured cards */}
        <View className='h-60 w-full overflow-hidden'>
          <Animated.View
            style={{
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX }],
            }}
          >
            {slides.map((item) => (
              <View
                key={item.id}
                style={{ width }}
                className='relative h-60 overflow-hidden justify-between p-4'
              >
                <Image
                  source={item.image}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.3,
                  }}
                  resizeMode='cover'
                />

                <View>
                  <Text className='text-3xl text-white font-bold' numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text className='text-xs text-white mt-2 pr-4' numberOfLines={3}>
                    {item.desc}
                  </Text>
                </View>

                <View className='items-end'>
                  <View className='border border-r-2 border-white rounded-full items-center px-5 py-2'>
                    <Text className='text-xl text-white'>Play now</Text>
                  </View>
                </View>
              </View>
            ))}
          </Animated.View>
        </View>
      </ScrollView>

      {/* Dark overlay: tap outside the sidebar to close */}
      <Animated.View
        pointerEvents={isOpen ? 'auto' : 'none'}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          opacity: overlayOpacity,
          zIndex: 40,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => setIsOpen(false)} />
      </Animated.View>

      {/* Sidebar */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: SIDEBAR_WIDTH,
          backgroundColor: '#1b1b27',
          transform: [{ translateX: sidebarX }],
          zIndex: 50,
          elevation: 50,
        }}
      >
        {/* Sidebar header with close button */}
        <View className='h-[100px] flex-row items-end justify-between px-5 pb-4'>
          <Text className='text-2xl text-white font-bold'>Menu</Text>
          <Pressable onPress={() => setIsOpen(false)}>
            <Text className='text-3xl text-white'>✕</Text>
          </Pressable>
        </View>

        {/* Menu items */}
        <View className='mt-4'>
          {menuItems.map((item) => (
            <Pressable
              key={item}
              onPress={() => {
                setIsOpen(false)
                // navigate here later, e.g. router.push('/games')
              }}
              className='px-5 py-4 border-b border-white/10'
            >
              <Text className='text-xl text-white'>{item}</Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>
    </View>
  )
}