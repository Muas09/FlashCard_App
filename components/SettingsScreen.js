import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>Page 2</Text>
            </View>
            <Text style={styles.title}>Settings</Text>
            {/* Đây là nơi để bạn thêm các thiết lập */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    headerText: {
        marginBottom: 500,
        fontSize:24,
    }
    
    // Thêm các kiểu CSS khác tùy theo nhu cầu của bạn
});

export default SettingsScreen;
