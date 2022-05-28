import { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Swiper,
  SwiperItem,
  Image,
} from '@tarojs/components';
import './index.scss';
import image1 from '../../assets/001.jpeg';
import Taro from '@tarojs/taro';

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  headerImage: string[] = [image1];

  render() {
    return (
      <View className='index'>
        <ScrollView className='index-scroll' scrollY>
          <Swiper style={{ height: Taro.pxTransform(480) }}>
            {this.headerImage.map((src, i) => {
              return (
                <SwiperItem key={i} style={{ height: Taro.pxTransform(480) }}>
                  <Image src={src} className='index-scroll-icon' />
                </SwiperItem>
              );
            })}
          </Swiper>
        </ScrollView>
        <View className='index-tarbbar'>
          <Text>我的</Text>
        </View>
      </View>
    );
  }
}
