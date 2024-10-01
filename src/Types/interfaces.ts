export interface ITraining {
    id: string;
    name: string;
    description: string;
    duration: number; // Duração em horas
    due_date: string; // Data de entrega (formato ISO)
    authorId: string; // ID do autor
    createdAt: string; // Data de criação (formato ISO)
}

export interface ITrainingContent {
    id: string;
    trainingId: string;
    name: string;
    createdAt: string;
}

export interface IUser {
    id: string;
    fullName: string;
    role: string;
    employeeId: string;
}

// export interface ITraining {
//     authorId: string;         
//     createdAt: string;        
//     description: string;      
//     due_date: string | null;  
//     duration: number;         
//     id: string;               
//     name: string;             
//     updatedAt: string;        
// }
