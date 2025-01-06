import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {TNav} from '../utils/types';
import {FONT_FAMILY} from '../utils/consts';
import {viewfinder} from '../assets';

const {height} = Dimensions.get('screen');

const renderNoPermission = () => <View style={styles.container} />;

const renderNoCamera = () => <View style={styles.container} />;

const LensSearch = () => {
  const navigation = useNavigation<TNav>();
  const cameraRef = React.useRef<Camera>(null);
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera', 'telephoto-camera'],
  });

  const [flash, toggleFlash] = useState<'off' | 'on'>('off');

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return renderNoPermission();
  }
  if (device == null) {
    return renderNoCamera();
  }

  const onClickPhoto = async () => {
    const photo = await cameraRef.current?.takePhoto({
      enableShutterSound: true,
      flash,
    });
    const result = await fetch(`file://${photo?.path}`);
    const data = await result.blob();
    const reader = new FileReader();
    reader.onloadend = () => {
      const url = reader.result as string;
      navigation.navigate('ImageSearchScreen', {imageUrl: url});
    };
    reader.readAsDataURL(data);
  };

  const onPressGallery = () => {
    console.log('Open gallery');
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onToggleFlash = () => {
    toggleFlash(prev => (prev === 'off' ? 'on' : 'off'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive
          photo
          ref={cameraRef}
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={onPressBack}>
            <Icon name="chevron-left" size={32} color={COLORS.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onToggleFlash}>
            <Icon
              name={flash === 'on' ? 'flash' : 'flash-off'}
              size={24}
              color={COLORS.text}
            />
          </TouchableOpacity>
        </View>
        <Image source={viewfinder} style={styles.viewfinder} />
        <TouchableOpacity onPress={onPressGallery} style={styles.galleryIcon}>
          <Icon name="image-outline" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickPhoto} style={styles.captureButton}>
          <View style={styles.captureButtonInner}>
            <Icon name="magnify" size={32} color={COLORS.dark} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.chipOption}>
          <Icon name="translate" size={16} color={COLORS.text} />
          <Text style={styles.chipText}>Translate</Text>
        </View>
        <View style={[styles.chipOption, styles.activeChip]}>
          <Icon name="magnify" size={16} color={COLORS.primary} />
          <Text style={[styles.chipText, styles.activeChipText]}>Search</Text>
        </View>
        <View style={styles.chipOption}>
          <Icon name="school-outline" size={16} color={COLORS.text} />
          <Text style={styles.chipText}>Homework</Text>
        </View>
      </View>
    </View>
  );
};

export default LensSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 16,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 8,
  },
  cameraContainer: {
    position: 'relative',
    width: '100%',
    height: height * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    overflow: 'hidden',
  },
  viewfinder: {
    position: 'absolute',
    opacity: 0.5,
  },
  captureButton: {
    position: 'absolute',
    bottom: 32,
    width: 72,
    height: 72,
    borderRadius: 100,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.text,
  },
  captureButtonInner: {
    width: 62,
    height: 62,
    borderRadius: 100,
    backgroundColor: COLORS.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryIcon: {
    width: 44,
    height: 44,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.text,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 44,
    left: 32,
  },
  footer: {
    width: '100%',
    height: height * 0.07,
    backgroundColor: COLORS.fill,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  chipOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: COLORS.fill,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 12,
  },
  activeChip: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
  chipText: {
    color: COLORS.text,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  activeChipText: {
    color: COLORS.primary,
  },
});
