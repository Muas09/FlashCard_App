import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

class PlayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: [
                {
                    content: 'Hello',
                    answer: 'Xin chào ',
                },
                {
                    content: 'Apple',
                    answer: 'Quả táo',
                },
                {
                    content: 'Banana',
                    answer: 'Chuối',
                },
                {
                    content: 'Human',
                    answer: 'Con người ',
                },
                {
                    content: 'Dance',
                    answer: 'Nhảy ',
                },
            ],
            currentIndex: 0,
            showAnswer: false,
        };
    }

    toggleAnswer = () => {
        this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer,
        }));
    };

    goToNextCard = () => {
        const { currentIndex, flashcards } = this.state;
        if (currentIndex < flashcards.length - 1) {
            this.setState({
                currentIndex: currentIndex + 1,
                showAnswer: false,
            });
        }
    };

    goToPreviousCard = () => {
        const { currentIndex } = this.state;
        if (currentIndex > 0) {
            this.setState({
                currentIndex: currentIndex - 1,
                showAnswer: false,
            });
        }
    };

    removeCardFromDeck = () => {
        const { currentIndex, flashcards } = this.state;
        if (flashcards.length === 1) {
            return;
        }

        if (currentIndex === flashcards.length - 1) {
            // Nếu currentIndex là trang cuối cùng, điều chỉnh currentIndex để tránh lỗi
            this.setState({
                currentIndex: currentIndex - 1,
            });
        }

        flashcards.splice(currentIndex, 1);
        this.setState({
            flashcards: flashcards,
            showAnswer: false,
        });
    };


    resetDeck = () => {
        this.setState({
            currentIndex: 0,
            showAnswer: false,
            flashcards: [
                {
                    content: 'Hello',
                    answer: 'Xin chào ',
                },
                {
                    content: 'Apple',
                    answer: 'Quả táo',
                },
                {
                    content: 'Banana',
                    answer: 'Chuối',
                },
                {
                    content: 'Human',
                    answer: 'Con người ',
                },
                {
                    content: 'Dance',
                    answer: 'Nhảy ',
                },
            ],
        });
    };

    render() {
        const { flashcards, currentIndex, showAnswer } = this.state;
        const currentFlashcard = flashcards[currentIndex];

        return (
            <TouchableWithoutFeedback onPress={this.toggleAnswer}>
                
                <View>
                    <View>
                        <Text style={styles.headerText}>Page 1</Text>
                    </View>
                    
                    <View style={[styles.container, showAnswer ? styles.answerContainer : styles.questionContainer]}>
                        <Text style={styles.answerText}>{showAnswer ? currentFlashcard.answer : currentFlashcard.content}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.goToPreviousCard}>
                            <Text style={styles.buttonText}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.goToNextCard}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.removeResetContainer}>
                        <TouchableOpacity style={[styles.buttonDeck, styles.removeResetButton]} onPress={this.removeCardFromDeck}>
                            <Text style={styles.removeResetButtonText}>Remove from Deck</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonDeck, styles.removeResetButton]} onPress={this.resetDeck}>
                            <Text style={styles.removeResetButtonText}>Reset Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 390,
        height: 420,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
    answerContainer: {
        backgroundColor: '#DC134C',
    },
    questionContainer: {
        backgroundColor: '#DC134C',
    },
    answerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    button: {
        width: 100,
        padding: 10,
        borderRadius: 5,
        borderColor: '#DC134C',
        borderWidth: 1,
    },
    buttonText: {
        color: '#DC134C',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonDeck: {
        width: 100,
        padding: 10,
        borderRadius: 5,
    },
    removeResetContainer: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    removeResetButton: {
        width: 360,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    removeResetButtonText: {
        color: '#DC134C',
        fontSize: 16,
        textAlign: 'center',
    },
    headerText: {
        width: 400,
        height:50,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: '#DCDCDC',
    },
});

export default PlayScreen;
