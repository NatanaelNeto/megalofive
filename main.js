function setup() {

}

function draw() {



}

let speed = 0.65;
let next = speed * 32;
MEGALO_VANIA = {
    notes: [
        {pitch: 62, startTime: speed * 0.0, endTime: speed * 0.25},
        {pitch: 62, startTime: speed * 0.25, endTime: speed * 0.5},
        {pitch: 74, startTime: speed * 0.5, endTime: speed * 0.75},
        {pitch: 69, startTime: speed * 1.0, endTime: speed * 1.25},
        {pitch: 68, startTime: speed * 1.75, endTime: speed * 2.0},
        {pitch: 67, startTime: speed * 2.25, endTime: speed * 2.5},
        {pitch: 65, startTime: speed * 2.75, endTime: speed * 3.25},
        {pitch: 62, startTime: speed * 3.25, endTime: speed * 3.5},
        {pitch: 65, startTime: speed * 3.5, endTime: speed * 3.75},
        {pitch: 67, startTime: speed * 3.75, endTime: speed * 4},

        {pitch: 60, startTime: speed * 4.0, endTime: speed * 4.25},
        {pitch: 60, startTime: speed * 4.25, endTime: speed * 4.5},
        {pitch: 74, startTime: speed * 4.5, endTime: speed * 4.75},
        {pitch: 69, startTime: speed * 5.0, endTime: speed * 5.25},
        {pitch: 68, startTime: speed * 5.75, endTime: speed * 6.0},
        {pitch: 67, startTime: speed * 6.25, endTime: speed * 6.5},
        {pitch: 65, startTime: speed * 6.75, endTime: speed * 7.25},
        {pitch: 62, startTime: speed * 7.25, endTime: speed * 7.5},
        {pitch: 65, startTime: speed * 7.5, endTime: speed * 7.75},
        {pitch: 67, startTime: speed * 7.75, endTime: speed * 8},

        {pitch: 59, startTime: speed * 8.0, endTime: speed * 8.25},
        {pitch: 59, startTime: speed * 8.25, endTime: speed * 8.5},
        {pitch: 74, startTime: speed * 8.5, endTime: speed * 8.75},
        {pitch: 69, startTime: speed * 9.0, endTime: speed * 9.25},
        {pitch: 68, startTime: speed * 9.75, endTime: speed * 10.0},
        {pitch: 67, startTime: speed * 10.25, endTime: speed * 10.5},
        {pitch: 65, startTime: speed * 10.75, endTime: speed * 11.25},
        {pitch: 62, startTime: speed * 11.25, endTime: speed * 11.5},
        {pitch: 65, startTime: speed * 11.5, endTime: speed * 11.75},
        {pitch: 67, startTime: speed * 11.75, endTime: speed * 12},
        
        {pitch: 58, startTime: speed * 12.0, endTime: speed *   12.25},
        {pitch: 58, startTime: speed * 12.25, endTime: speed *  12.5},
        {pitch: 74, startTime: speed * 12.5, endTime: speed *   12.75},
        {pitch: 69, startTime: speed * 13.0, endTime: speed *   13.25},
        {pitch: 68, startTime: speed * 13.75, endTime: speed *  14.0},
        {pitch: 67, startTime: speed * 14.25, endTime: speed *  14.5},
        {pitch: 65, startTime: speed * 14.75, endTime: speed *  15.25},
        {pitch: 62, startTime: speed * 15.25, endTime: speed *  15.5},
        {pitch: 65, startTime: speed * 15.5, endTime: speed *   15.75},
        {pitch: 67, startTime: speed * 15.75, endTime: speed *  16},

        {pitch: 62, startTime: speed * 16.0, endTime: speed *   16.25},
        {pitch: 62, startTime: speed * 16.25, endTime: speed *  16.5},
        {pitch: 74, startTime: speed * 16.5, endTime: speed *   16.75},
        {pitch: 69, startTime: speed * 17.0, endTime: speed *   17.25},
        {pitch: 68, startTime: speed * 17.75, endTime: speed *  18.0},
        {pitch: 67, startTime: speed * 18.25, endTime: speed *  18.5},
        {pitch: 65, startTime: speed * 18.75, endTime: speed *  19.25},
        {pitch: 62, startTime: speed * 19.25, endTime: speed *  19.5},
        {pitch: 65, startTime: speed * 19.5, endTime: speed *   19.75},
        {pitch: 67, startTime: speed * 19.75, endTime: speed *  20},
        
        {pitch: 60, startTime: speed * 20.0, endTime: speed *   20.25},
        {pitch: 60, startTime: speed * 20.25, endTime: speed *  20.5},
        {pitch: 74, startTime: speed * 20.5, endTime: speed *   20.75},
        {pitch: 69, startTime: speed * 21.0, endTime: speed *   21.25},
        {pitch: 68, startTime: speed * 21.75, endTime: speed *  22.0},
        {pitch: 67, startTime: speed * 22.25, endTime: speed *  22.5},
        {pitch: 65, startTime: speed * 22.75, endTime: speed *  23.25},
        {pitch: 62, startTime: speed * 23.25, endTime: speed *  23.5},
        {pitch: 65, startTime: speed * 23.5, endTime: speed *   23.75},
        {pitch: 67, startTime: speed * 23.75, endTime: speed *  24},
        
        {pitch: 59, startTime: speed * 24.0, endTime: speed *   24.25},
        {pitch: 59, startTime: speed * 24.25, endTime: speed *  24.5},
        {pitch: 74, startTime: speed * 24.5, endTime: speed *   24.75},
        {pitch: 69, startTime: speed * 25.0, endTime: speed *   25.25},
        {pitch: 68, startTime: speed * 25.75, endTime: speed *  26.0},
        {pitch: 67, startTime: speed * 26.25, endTime: speed *  26.5},
        {pitch: 65, startTime: speed * 26.75, endTime: speed *  27.25},
        {pitch: 62, startTime: speed * 27.25, endTime: speed *  27.5},
        {pitch: 65, startTime: speed * 27.5, endTime: speed *   27.75},
        {pitch: 67, startTime: speed * 27.75, endTime: speed *  28},
        
        {pitch: 58, startTime: speed * 28.0, endTime: speed *   28.25},
        {pitch: 58, startTime: speed * 28.25, endTime: speed *  28.5},
        {pitch: 74, startTime: speed * 28.5, endTime: speed *   28.75},
        {pitch: 69, startTime: speed * 29.0, endTime: speed *   29.25},
        {pitch: 68, startTime: speed * 29.75, endTime: speed *  30.0},
        {pitch: 67, startTime: speed * 30.25, endTime: speed *  30.5},
        {pitch: 65, startTime: speed * 30.75, endTime: speed *  31.25},
        {pitch: 62, startTime: speed * 31.25, endTime: speed *  31.5},
        {pitch: 65, startTime: speed * 31.5, endTime: speed *   31.75},
        {pitch: 67, startTime: speed * 31.75, endTime: speed *  32},
        
        // prox seq
        
        {pitch: 62, startTime: next + speed * 0.0, endTime: next + speed * 0.25},
        {pitch: 62, startTime: next + speed * 0.25, endTime: next + speed * 0.5},
        {pitch: 74, startTime: next + speed * 0.5, endTime: next + speed * 0.75},
        {pitch: 69, startTime: next + speed * 1.0, endTime: next + speed * 1.25},
        {pitch: 68, startTime: next + speed * 1.75, endTime: next + speed * 2.0},
        {pitch: 67, startTime: next + speed * 2.25, endTime: next + speed * 2.5},
        {pitch: 65, startTime: next + speed * 2.75, endTime: next + speed * 3.25},
        {pitch: 62, startTime: next + speed * 3.25, endTime: next + speed * 3.5},
        {pitch: 65, startTime: next + speed * 3.5, endTime: next + speed * 3.75},
        {pitch: 67, startTime: next + speed * 3.75, endTime: next + speed * 4},

        {pitch: 60, startTime: next + speed * 4.0, endTime: next + speed * 4.25},
        {pitch: 60, startTime: next + speed * 4.25, endTime: next + speed * 4.5},
        {pitch: 74, startTime: next + speed * 4.5, endTime: next + speed * 4.75},
        {pitch: 69, startTime: next + speed * 5.0, endTime: next + speed * 5.25},
        {pitch: 68, startTime: next + speed * 5.75, endTime: next + speed * 6.0},
        {pitch: 67, startTime: next + speed * 6.25, endTime: next + speed * 6.5},
        {pitch: 65, startTime: next + speed * 6.75, endTime: next + speed * 7.25},
        {pitch: 62, startTime: next + speed * 7.25, endTime: next + speed * 7.5},
        {pitch: 65, startTime: next + speed * 7.5, endTime: next + speed * 7.75},
        {pitch: 67, startTime: next + speed * 7.75, endTime: next + speed * 8},

        {pitch: 59, startTime: next + speed * 8.0, endTime: next + speed * 8.25},
        {pitch: 59, startTime: next + speed * 8.25, endTime: next + speed * 8.5},
        {pitch: 74, startTime: next + speed * 8.5, endTime: next + speed * 8.75},
        {pitch: 69, startTime: next + speed * 9.0, endTime: next + speed * 9.25},
        {pitch: 68, startTime: next + speed * 9.75, endTime: next + speed * 10.0},
        {pitch: 67, startTime: next + speed * 10.25, endTime: next + speed * 10.5},
        {pitch: 65, startTime: next + speed * 10.75, endTime: next + speed * 11.25},
        {pitch: 62, startTime: next + speed * 11.25, endTime: next + speed * 11.5},
        {pitch: 65, startTime: next + speed * 11.5, endTime: next + speed * 11.75},
        {pitch: 67, startTime: next + speed * 11.75, endTime: next + speed * 12},
        
        {pitch: 58, startTime: next + speed * 12.0, endTime: next + speed *   12.25},
        {pitch: 58, startTime: next + speed * 12.25, endTime: next + speed *  12.5},
        {pitch: 74, startTime: next + speed * 12.5, endTime: next + speed *   12.75},
        {pitch: 69, startTime: next + speed * 13.0, endTime: next + speed *   13.25},
        {pitch: 68, startTime: next + speed * 13.75, endTime: next + speed *  14.0},
        {pitch: 67, startTime: next + speed * 14.25, endTime: next + speed *  14.5},
        {pitch: 65, startTime: next + speed * 14.75, endTime: next + speed *  15.25},
        {pitch: 62, startTime: next + speed * 15.25, endTime: next + speed *  15.5},
        {pitch: 65, startTime: next + speed * 15.5, endTime: next + speed *   15.75},
        {pitch: 67, startTime: next + speed * 15.75, endTime: next + speed *  16},

        {pitch:12 + 62, startTime: next + speed * 16.0, endTime: next + speed *   16.25},
        {pitch:12 + 62, startTime: next + speed * 16.25, endTime: next + speed *  16.5},
        {pitch:12 + 74, startTime: next + speed * 16.5, endTime: next + speed *   16.75},
        {pitch:12 + 69, startTime: next + speed * 17.0, endTime: next + speed *   17.25},
        {pitch:12 + 68, startTime: next + speed * 17.75, endTime: next + speed *  18.0},
        {pitch:12 + 67, startTime: next + speed * 18.25, endTime: next + speed *  18.5},
        {pitch:12 + 65, startTime: next + speed * 18.75, endTime: next + speed *  19.25},
        {pitch:12 + 62, startTime: next + speed * 19.25, endTime: next + speed *  19.5},
        {pitch:12 + 65, startTime: next + speed * 19.5, endTime: next + speed *   19.75},
        {pitch:12 + 67, startTime: next + speed * 19.75, endTime: next + speed *  20},
        
        {pitch:12 + 60, startTime: next + speed * 20.0, endTime: next + speed *   20.25},
        {pitch:12 + 60, startTime: next + speed * 20.25, endTime: next + speed *  20.5},
        {pitch:12 + 74, startTime: next + speed * 20.5, endTime: next + speed *   20.75},
        {pitch:12 + 69, startTime: next + speed * 21.0, endTime: next + speed *   21.25},
        {pitch:12 + 68, startTime: next + speed * 21.75, endTime: next + speed *  22.0},
        {pitch:12 + 67, startTime: next + speed * 22.25, endTime: next + speed *  22.5},
        {pitch:12 + 65, startTime: next + speed * 22.75, endTime: next + speed *  23.25},
        {pitch:12 + 62, startTime: next + speed * 23.25, endTime: next + speed *  23.5},
        {pitch:12 + 65, startTime: next + speed * 23.5, endTime: next + speed *   23.75},
        {pitch:12 + 67, startTime: next + speed * 23.75, endTime: next + speed *  24},
        
        {pitch:12 + 59, startTime: next + speed * 24.0, endTime: next + speed *   24.25},
        {pitch:12 + 59, startTime: next + speed * 24.25, endTime: next + speed *  24.5},
        {pitch:12 + 74, startTime: next + speed * 24.5, endTime: next + speed *   24.75},
        {pitch:12 + 69, startTime: next + speed * 25.0, endTime: next + speed *   25.25},
        {pitch:12 + 68, startTime: next + speed * 25.75, endTime: next + speed *  26.0},
        {pitch:12 + 67, startTime: next + speed * 26.25, endTime: next + speed *  26.5},
        {pitch:12 + 65, startTime: next + speed * 26.75, endTime: next + speed *  27.25},
        {pitch:12 + 62, startTime: next + speed * 27.25, endTime: next + speed *  27.5},
        {pitch:12 + 65, startTime: next + speed * 27.5, endTime: next + speed *   27.75},
        {pitch:12 + 67, startTime: next + speed * 27.75, endTime: next + speed *  28},
        
        {pitch:12 + 58, startTime: next + speed * 28.0, endTime: next + speed *   28.25},
        {pitch:12 + 58, startTime: next + speed * 28.25, endTime: next + speed *  28.5},
        {pitch:12 + 74, startTime: next + speed * 28.5, endTime: next + speed *   28.75},
        {pitch:12 + 69, startTime: next + speed * 29.0, endTime: next + speed *   29.25},
        {pitch:12 + 68, startTime: next + speed * 29.75, endTime: next + speed *  30.0},
        {pitch:12 + 67, startTime: next + speed * 30.25, endTime: next + speed *  30.5},
        {pitch:12 + 65, startTime: next + speed * 30.75, endTime: next + speed *  31.25},
        {pitch:12 + 62, startTime: next + speed * 31.25, endTime: next + speed *  31.5},
        {pitch:12 + 65, startTime: next + speed * 31.5, endTime: next + speed *   31.75},
        {pitch:12 + 67, startTime: next + speed * 31.75, endTime: next + speed *  32},

        {pitch:12 + 62, startTime: next + speed * (4 + 28.0), endTime: next + speed * (4 +   28.25)},
        {pitch:12 + 62, startTime: next + speed * (4 + 28.25), endTime: next + speed * (4 +  28.5)},
        {pitch:12 + 74, startTime: next + speed * (4 + 28.5), endTime: next + speed * (4 +   28.75)},
        {pitch:12 + 69, startTime: next + speed * (4 + 29.0), endTime: next + speed * (4 +   29.25)},
        {pitch:12 + 68, startTime: next + speed * (4 + 29.75), endTime: next + speed * (4 +  30.0)},
        {pitch:12 + 67, startTime: next + speed * (4 + 30.25), endTime: next + speed * (4 +  30.5)},
        {pitch:12 + 65, startTime: next + speed * (4 + 30.75), endTime: next + speed * (4 +  31.25)},
        {pitch:12 + 62, startTime: next + speed * (4 + 31.25), endTime: next + speed * (4 +  31.5)},
        {pitch:12 + 65, startTime: next + speed * (4 + 31.5), endTime: next + speed * (4 +   31.75)},
        {pitch:12 + 67, startTime: next + speed * (4 + 31.75), endTime: next + speed * (4 +  32)},
        
        {pitch: + 62, startTime: next + speed * (8 + 28.0), endTime: next + speed * (8 +   28.25)},
        {pitch: + 62, startTime: next + speed * (8 + 28.25), endTime: next + speed * (8 +  28.5)},
        {pitch: + 74, startTime: next + speed * (8 + 28.5), endTime: next + speed * (8 +   28.75)},
        {pitch: + 69, startTime: next + speed * (8 + 29.0), endTime: next + speed * (8 +   29.25)},
        {pitch: + 68, startTime: next + speed * (8 + 29.75), endTime: next + speed * (8 +  30.0)},
        {pitch: + 67, startTime: next + speed * (8 + 30.25), endTime: next + speed * (8 +  30.5)},
        {pitch: + 65, startTime: next + speed * (8 + 30.75), endTime: next + speed * (8 +  31.25)},
        {pitch: + 62, startTime: next + speed * (8 + 31.25), endTime: next + speed * (8 +  31.5)},
        {pitch: + 65, startTime: next + speed * (8 + 31.5), endTime: next + speed * (8 +   31.75)},
        {pitch: + 67, startTime: next + speed * (8 + 31.75), endTime: next + speed * (8 +  32)},






        //graves


        {pitch: 50, startTime: speed * 16.0, endTime: speed *   16.5},
        {pitch: 50, startTime: speed * 16.5, endTime: speed *  17.0},
        {pitch: 50, startTime: speed * 17.0, endTime: speed *   17.25},
        {pitch: 50, startTime: speed * 17.25, endTime: speed *   17.5},
        {pitch: 50, startTime: speed * 17.75, endTime: speed *  18.0},
        {pitch: 50, startTime: speed * 18.25, endTime: speed *  18.5},
        {pitch: 50, startTime: speed * 18.75, endTime: speed *  19.0},
        {pitch: 50, startTime: speed * 19.0, endTime: speed *  19.25},
        {pitch: 50, startTime: speed * 19.25, endTime: speed *   19.5},
        {pitch: 50, startTime: speed * 19.5, endTime: speed *  19.75},
        {pitch: 50, startTime: speed * 19.75, endTime: speed *  20.0},
        
        {pitch: 48, startTime: speed * 20.0, endTime: speed *   20.5},
        {pitch: 48, startTime: speed * 20.5, endTime: speed *   21.0},
        {pitch: 48, startTime: speed * 21.0, endTime: speed *   21.25},
        {pitch: 48, startTime: speed * 21.25, endTime: speed *  21.5},
        {pitch: 48, startTime: speed * 21.75, endTime: speed *  22.0},
        {pitch: 48, startTime: speed * 22.25, endTime: speed *  22.5},
        {pitch: 48, startTime: speed * 22.75, endTime: speed *  23.0},
        {pitch: 48, startTime: speed * 23.0, endTime: speed *   23.25},
        {pitch: 48, startTime: speed * 23.25, endTime: speed *  23.5},
        {pitch: 48, startTime: speed * 23.5, endTime: speed *   23.75},
        {pitch: 48, startTime: speed * 23.75, endTime: speed *  24.0},

        {pitch: 47, startTime: speed * 24.0, endTime: speed *   24.5},
        {pitch: 47, startTime: speed * 24.5, endTime: speed *   25.0},
        {pitch: 47, startTime: speed * 25.0, endTime: speed *   25.25},
        {pitch: 47, startTime: speed * 25.25, endTime: speed *  25.5},
        {pitch: 47, startTime: speed * 25.75, endTime: speed *  26.0},
        {pitch: 47, startTime: speed * 26.25, endTime: speed *  26.5},
        {pitch: 47, startTime: speed * 26.75, endTime: speed *  27.0},
        {pitch: 47, startTime: speed * 27.0, endTime: speed *   27.25},
        {pitch: 47, startTime: speed * 27.25, endTime: speed *  27.5},
        {pitch: 47, startTime: speed * 27.5, endTime: speed *   27.75},
        {pitch: 47, startTime: speed * 27.75, endTime: speed *  28.0},

        {pitch: 46, startTime: speed * 28.0, endTime: speed *   28.5},
        {pitch: 46, startTime: speed * 28.5, endTime: speed *   29.0},
        {pitch: 46, startTime: speed * 29.0, endTime: speed *   29.25},
        {pitch: 46, startTime: speed * 29.25, endTime: speed *  29.5},
        {pitch: 47, startTime: speed * 29.75, endTime: speed *  30.0},
        {pitch: 47, startTime: speed * 30.25, endTime: speed *  30.5},
        {pitch: 47, startTime: speed * 30.75, endTime: speed *  31.0},
        {pitch: 47, startTime: speed * 31.0, endTime: speed *   31.25},
        {pitch: 47, startTime: speed * 31.25, endTime: speed *  31.5},
        {pitch: 47, startTime: speed * 31.5, endTime: speed *   31.75},
        {pitch: 47, startTime: speed * 31.75, endTime: speed *  32.0},

        //prox seq

        {pitch: 50, startTime: (next/2) + speed * 16.0, endTime: (next/2) + speed *   16.5},
        {pitch: 50, startTime: (next/2) + speed * 16.5, endTime: (next/2) + speed *  17.0},
        {pitch: 50, startTime: (next/2) + speed * 17.0, endTime: (next/2) + speed *   17.25},
        {pitch: 50, startTime: (next/2) + speed * 17.25, endTime: (next/2) + speed *   17.5},
        {pitch: 50, startTime: (next/2) + speed * 17.75, endTime: (next/2) + speed *  18.0},
        {pitch: 50, startTime: (next/2) + speed * 18.25, endTime: (next/2) + speed *  18.5},
        {pitch: 50, startTime: (next/2) + speed * 18.75, endTime: (next/2) + speed *  19.0},
        {pitch: 50, startTime: (next/2) + speed * 19.0, endTime: (next/2) + speed *  19.25},
        {pitch: 50, startTime: (next/2) + speed * 19.25, endTime: (next/2) + speed *   19.5},
        {pitch: 50, startTime: (next/2) + speed * 19.5, endTime: (next/2) + speed *  19.75},
        {pitch: 50, startTime: (next/2) + speed * 19.75, endTime: (next/2) + speed *  20.0},
        
        {pitch: 48, startTime: (next/2) + speed * 20.0, endTime: (next/2) + speed *   20.5},
        {pitch: 48, startTime: (next/2) + speed * 20.5, endTime: (next/2) + speed *   21.0},
        {pitch: 48, startTime: (next/2) + speed * 21.0, endTime: (next/2) + speed *   21.25},
        {pitch: 48, startTime: (next/2) + speed * 21.25, endTime: (next/2) + speed *  21.5},
        {pitch: 48, startTime: (next/2) + speed * 21.75, endTime: (next/2) + speed *  22.0},
        {pitch: 48, startTime: (next/2) + speed * 22.25, endTime: (next/2) + speed *  22.5},
        {pitch: 48, startTime: (next/2) + speed * 22.75, endTime: (next/2) + speed *  23.0},
        {pitch: 48, startTime: (next/2) + speed * 23.0, endTime: (next/2) + speed *   23.25},
        {pitch: 48, startTime: (next/2) + speed * 23.25, endTime: (next/2) + speed *  23.5},
        {pitch: 48, startTime: (next/2) + speed * 23.5, endTime: (next/2) + speed *   23.75},
        {pitch: 48, startTime: (next/2) + speed * 23.75, endTime: (next/2) + speed *  24.0},

        {pitch: 47, startTime: (next/2) + speed * 24.0, endTime: (next/2) + speed *   24.5},
        {pitch: 47, startTime: (next/2) + speed * 24.5, endTime: (next/2) + speed *   25.0},
        {pitch: 47, startTime: (next/2) + speed * 25.0, endTime: (next/2) + speed *   25.25},
        {pitch: 47, startTime: (next/2) + speed * 25.25, endTime: (next/2) + speed *  25.5},
        {pitch: 47, startTime: (next/2) + speed * 25.75, endTime: (next/2) + speed *  26.0},
        {pitch: 47, startTime: (next/2) + speed * 26.25, endTime: (next/2) + speed *  26.5},
        {pitch: 47, startTime: (next/2) + speed * 26.75, endTime: (next/2) + speed *  27.0},
        {pitch: 47, startTime: (next/2) + speed * 27.0, endTime: (next/2) + speed *   27.25},
        {pitch: 47, startTime: (next/2) + speed * 27.25, endTime: (next/2) + speed *  27.5},
        {pitch: 47, startTime: (next/2) + speed * 27.5, endTime: (next/2) + speed *   27.75},
        {pitch: 47, startTime: (next/2) + speed * 27.75, endTime: (next/2) + speed *  28.0},

        {pitch: 46, startTime: (next/2) + speed * 28.0, endTime: (next/2) + speed *   28.5},
        {pitch: 46, startTime: (next/2) + speed * 28.5, endTime: (next/2) + speed *   29.0},
        {pitch: 46, startTime: (next/2) + speed * 29.0, endTime: (next/2) + speed *   29.25},
        {pitch: 46, startTime: (next/2) + speed * 29.25, endTime: (next/2) + speed *  29.5},
        {pitch: 47, startTime: (next/2) + speed * 29.75, endTime: (next/2) + speed *  30.0},
        {pitch: 47, startTime: (next/2) + speed * 30.25, endTime: (next/2) + speed *  30.5},
        {pitch: 47, startTime: (next/2) + speed * 30.75, endTime: (next/2) + speed *  31.0},
        {pitch: 47, startTime: (next/2) + speed * 31.0, endTime: (next/2) + speed *   31.25},
        {pitch: 47, startTime: (next/2) + speed * 31.25, endTime: (next/2) + speed *  31.5},
        {pitch: 47, startTime: (next/2) + speed * 31.5, endTime: (next/2) + speed *   31.75},
        {pitch: 47, startTime: (next/2) + speed * 31.75, endTime: (next/2) + speed *  32.0},

        {pitch: 50, startTime: next + speed * 16.0, endTime: next + speed *   16.5},
        {pitch: 50, startTime: next + speed * 16.5, endTime: next + speed *  17.0},
        {pitch: 50, startTime: next + speed * 17.0, endTime: next + speed *   17.25},
        {pitch: 50, startTime: next + speed * 17.25, endTime: next + speed *   17.5},
        {pitch: 50, startTime: next + speed * 17.75, endTime: next + speed *  18.0},
        {pitch: 50, startTime: next + speed * 18.25, endTime: next + speed *  18.5},
        {pitch: 50, startTime: next + speed * 18.75, endTime: next + speed *  19.0},
        {pitch: 50, startTime: next + speed * 19.0, endTime: next + speed *  19.25},
        {pitch: 50, startTime: next + speed * 19.25, endTime: next + speed *   19.5},
        {pitch: 50, startTime: next + speed * 19.5, endTime: next + speed *  19.75},
        {pitch: 50, startTime: next + speed * 19.75, endTime: next + speed *  20.0},
        
        {pitch: 48, startTime: next + speed * 20.0, endTime: next + speed *   20.5},
        {pitch: 48, startTime: next + speed * 20.5, endTime: next + speed *   21.0},
        {pitch: 48, startTime: next + speed * 21.0, endTime: next + speed *   21.25},
        {pitch: 48, startTime: next + speed * 21.25, endTime: next + speed *  21.5},
        {pitch: 48, startTime: next + speed * 21.75, endTime: next + speed *  22.0},
        {pitch: 48, startTime: next + speed * 22.25, endTime: next + speed *  22.5},
        {pitch: 48, startTime: next + speed * 22.75, endTime: next + speed *  23.0},
        {pitch: 48, startTime: next + speed * 23.0, endTime: next + speed *   23.25},
        {pitch: 48, startTime: next + speed * 23.25, endTime: next + speed *  23.5},
        {pitch: 48, startTime: next + speed * 23.5, endTime: next + speed *   23.75},
        {pitch: 48, startTime: next + speed * 23.75, endTime: next + speed *  24.0},

        {pitch: 47, startTime: next + speed * 24.0, endTime: next + speed *   24.5},
        {pitch: 47, startTime: next + speed * 24.5, endTime: next + speed *   25.0},
        {pitch: 47, startTime: next + speed * 25.0, endTime: next + speed *   25.25},
        {pitch: 47, startTime: next + speed * 25.25, endTime: next + speed *  25.5},
        {pitch: 47, startTime: next + speed * 25.75, endTime: next + speed *  26.0},
        {pitch: 47, startTime: next + speed * 26.25, endTime: next + speed *  26.5},
        {pitch: 47, startTime: next + speed * 26.75, endTime: next + speed *  27.0},
        {pitch: 47, startTime: next + speed * 27.0, endTime: next + speed *   27.25},
        {pitch: 47, startTime: next + speed * 27.25, endTime: next + speed *  27.5},
        {pitch: 47, startTime: next + speed * 27.5, endTime: next + speed *   27.75},
        {pitch: 47, startTime: next + speed * 27.75, endTime: next + speed *  28.0},

        {pitch: 46, startTime: next + speed * 28.0, endTime: next + speed *   28.5},
        {pitch: 46, startTime: next + speed * 28.5, endTime: next + speed *   29.0},
        {pitch: 46, startTime: next + speed * 29.0, endTime: next + speed *   29.25},
        {pitch: 46, startTime: next + speed * 29.25, endTime: next + speed *  29.5},
        {pitch: 47, startTime: next + speed * 29.75, endTime: next + speed *  30.0},
        {pitch: 47, startTime: next + speed * 30.25, endTime: next + speed *  30.5},
        {pitch: 47, startTime: next + speed * 30.75, endTime: next + speed *  31.0},
        {pitch: 47, startTime: next + speed * 31.0, endTime: next + speed *   31.25},
        {pitch: 47, startTime: next + speed * 31.25, endTime: next + speed *  31.5},
        {pitch: 47, startTime: next + speed * 31.5, endTime: next + speed *   31.75},
        {pitch: 47, startTime: next + speed * 31.75, endTime: next + speed *  32.0},

        {pitch: 12 + 50, startTime: next + speed * 16.0, endTime: next + speed *   20},
        
        {pitch: 12 + 48, startTime: next + speed * 20.0, endTime: next + speed *   24},

        {pitch: 12 + 47, startTime: next + speed * 24.0, endTime: next + speed *   28},

        {pitch: 12 + 46, startTime: next + speed * 28.0, endTime: next + speed *   29.5},
        {pitch: 12 + 47, startTime: next + speed * 29.75, endTime: next + speed *  32.0},
        
    ],
    totalTime: next + speed * 40
};

MEGALO_VANIA_BASE = {
    notes: [
        {pitch: 62, startTime: speed * 0.0, endTime: speed * 0.25},
        {pitch: 62, startTime: speed * 0.25, endTime: speed * 0.5},
        {pitch: 74, startTime: speed * 0.5, endTime: speed * 0.75},
        {pitch: 69, startTime: speed * 1.0, endTime: speed * 1.25},
        {pitch: 68, startTime: speed * 1.75, endTime: speed * 2.0},
        {pitch: 67, startTime: speed * 2.25, endTime: speed * 2.5},
        {pitch: 65, startTime: speed * 2.75, endTime: speed * 3.25},
        {pitch: 62, startTime: speed * 3.25, endTime: speed * 3.5},
        {pitch: 65, startTime: speed * 3.5, endTime: speed * 3.75},
        {pitch: 67, startTime: speed * 3.75, endTime: speed * 4},

        {pitch: 60, startTime: speed * 4.0, endTime: speed * 4.25},
        {pitch: 60, startTime: speed * 4.25, endTime: speed * 4.5},
        {pitch: 74, startTime: speed * 4.5, endTime: speed * 4.75},
        {pitch: 69, startTime: speed * 5.0, endTime: speed * 5.25},
        {pitch: 68, startTime: speed * 5.75, endTime: speed * 6.0},
        {pitch: 67, startTime: speed * 6.25, endTime: speed * 6.5},
        {pitch: 65, startTime: speed * 6.75, endTime: speed * 7.25},
        {pitch: 62, startTime: speed * 7.25, endTime: speed * 7.5},
        {pitch: 65, startTime: speed * 7.5, endTime: speed * 7.75},
        {pitch: 67, startTime: speed * 7.75, endTime: speed * 8},

        {pitch: 59, startTime: speed * 8.0, endTime: speed * 8.25},
        {pitch: 59, startTime: speed * 8.25, endTime: speed * 8.5},
        {pitch: 74, startTime: speed * 8.5, endTime: speed * 8.75},
        {pitch: 69, startTime: speed * 9.0, endTime: speed * 9.25},
        {pitch: 68, startTime: speed * 9.75, endTime: speed * 10.0},
        {pitch: 67, startTime: speed * 10.25, endTime: speed * 10.5},
        {pitch: 65, startTime: speed * 10.75, endTime: speed * 11.25},
        {pitch: 62, startTime: speed * 11.25, endTime: speed * 11.5},
        {pitch: 65, startTime: speed * 11.5, endTime: speed * 11.75},
        {pitch: 67, startTime: speed * 11.75, endTime: speed * 12},
        
        {pitch: 58, startTime: speed * 12.0, endTime: speed *   12.25},
        {pitch: 58, startTime: speed * 12.25, endTime: speed *  12.5},
        {pitch: 74, startTime: speed * 12.5, endTime: speed *   12.75},
        {pitch: 69, startTime: speed * 13.0, endTime: speed *   13.25},
        {pitch: 68, startTime: speed * 13.75, endTime: speed *  14.0},
        {pitch: 67, startTime: speed * 14.25, endTime: speed *  14.5},
        {pitch: 65, startTime: speed * 14.75, endTime: speed *  15.25},
        {pitch: 62, startTime: speed * 15.25, endTime: speed *  15.5},
        {pitch: 65, startTime: speed * 15.5, endTime: speed *   15.75},
        {pitch: 67, startTime: speed * 15.75, endTime: speed *  16},
    ],
    totalTime: speed * 4
}



player = new mm.Player();

rnnPlayer = new mm.Player();
music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
music_rnn.initialize();
rnn_steps = 25;
rnn_temperature = 0.25;

function playRNN() {
    if (rnnPlayer.isPlaying()) {
        rnnPlayer.stop();
        return;
    }
        
    // The model expects a quantized sequence, and ours was unquantized:
    const qns = mm.sequences.quantizeNoteSequence(MEGALO_VANIA_BASE, 1);
    music_rnn.continueSequence(qns, rnn_steps, rnn_temperature).then((sample) => rnnPlayer.start(sample));
    document.getElementById("tempo").innerText = "MusicRNN usa ML para criar uma sequência no mesmo estilo";
    /*setTimeout(() => {
        rnnPlayer.stop();
    }, 400);*/
}


function play(){
player.stop();
player.start(MEGALO_VANIA);
document.getElementById("tempo").innerText = "Tempo total: " + MEGALO_VANIA.totalTime + "s"; 
}

function stop(){
    player.stop();
}
/*{pitch: 64, startTime: 5.5, endTime: 6.0},
    {pitch: 62, startTime: 6.0, endTime: 6.5},
    {pitch: 62, startTime: 6.5, endTime: 7.0},
    {pitch: 60, startTime: 7.0, endTime: 8.0},
    {pitch: 64, startTime: 8.0, endTime: 9.0},
    {pitch: 60, startTime: 9.0, endTime: 10.5},
    {pitch: 62, startTime: 10.5, endTime: 11.0},
    {pitch: 69, startTime: 11.0, endTime: 12.0},
    {pitch: 61, startTime: 12.0, endTime: 13.0},
    {pitch: 65, startTime: 13.0, endTime: 14.5},
    {pitch: 66, startTime: 14.5, endTime: 15.0},
    {pitch:  121.6368406, startTime: 15.0, endTime: 20.0}, */