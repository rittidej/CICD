pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose build'
            }           
        }
        stage('Test') {
            steps {
                sh 'docker-compose run app npm test'
            }           
        }
        stage('Deploy') {
            steps {
                // script {
                //     def user_input = input(message: 'Deploy?', parameters: [choice(name: 'DEPLOY', choices: ['Deploy', 'Abort'])])
                //     if (user_input == 'Deploy') {
                //         sh 'docker-compose up -d'
                //     }
                // }  
                sh 'docker-compose up -d'
            }          
        }        
    }
    post {
        failure {
            sh 'docker-compose down'
        }
    }
}
