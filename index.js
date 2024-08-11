// Original Data Set 1

// The provided course information.
// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
//   };
  
//   // The provided assignment group.
//   const AssignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//       {
//         id: 1,
//         name: "Declare a Variable",
//         due_at: "2023-01-25",
//         points_possible: 50
//       },
//       {
//         id: 2,
//         name: "Write a Function",
//         due_at: "2023-02-27",
//         points_possible: 150
//       },
//       {
//         id: 3,
//         name: "Code the World",
//         due_at: "3156-11-15",
//         points_possible: 500
//       }
//     ]
//   };
  
//   // The provided learner submission data.
//   const LearnerSubmissions = [
//     {
//       learner_id: 125,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-25",
//         score: 47
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-02-12",
//         score: 150
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 3,
//       submission: {
//         submitted_at: "2023-01-25",
//         score: 400
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-24",
//         score: 39
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-03-07",
//         score: 140
//       }
//     }
//   ];
//  ---------------------------------------------------------------------------------------

//  Test Script for Edge Cases: Set 2

// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
//   };
  
//   // The provided assignment group with edge cases
//   const AssignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451, // Use incorrect ID here to test error handling
//     group_weight: 25,
//     assignments: [
//       {
//         id: 1,
//         name: "Declare a Variable",
//         due_at: "2023-01-25",
//         points_possible: 0 // Edge case: zero points
//       },
//       {
//         id: 2,
//         name: "Write a Function",
//         due_at: "2023-02-27",
//         points_possible: 150
//       },
//       {
//         id: 3,
//         name: "Code the World",
//         due_at: "3156-11-15",
//         points_possible: 500
//       }
//     ]
//   };
  
//   // The provided learner submission data with edge cases
//   const LearnerSubmissions = [
//     {
//       learner_id: 125,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-26", // Late submission
//         score: 47
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-02-12",
//         score: 150
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 3,
//       submission: {
//         submitted_at: "2023-01-25",
//         score: 400
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-24",
//         score: 39
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-03-07",
//         score: 140
//       }
//     }
//   ];

// Test Data: Set 3

// Test data for CourseInfo
const CourseInfo = {
    id: 852,
    name: "Advanced JavaScript"
  };
  
  // Test data for AssignmentGroup
  const AssignmentGroup = {
    id: 67890,
    name: "JavaScript Mastery",
    course_id: 852,
    group_weight: 40,
    assignments: [
      {
        id: 10,
        name: "Closures and Scopes",
        due_at: "2024-02-15",
        points_possible: 60
      },
      {
        id: 11,
        name: "Asynchronous JavaScript",
        due_at: "2024-03-01",
        points_possible: 120
      },
      {
        id: 12,
        name: "Error Handling",
        due_at: "2024-04-10",
        points_possible: 80
      }
    ]
  };
  
  // Test data for LearnerSubmissions
  const LearnerSubmissions = [
    {
      learner_id: 201,
      assignment_id: 10,
      submission: {
        submitted_at: "2024-02-14",
        score: 55
      }
    },
    {
      learner_id: 201,
      assignment_id: 11,
      submission: {
        submitted_at: "2024-03-01",
        score: 100
      }
    },
    {
      learner_id: 201,
      assignment_id: 12,
      submission: {
        submitted_at: "2024-04-08",
        score: 70
      }
    },
    {
      learner_id: 202,
      assignment_id: 10,
      submission: {
        submitted_at: "2024-02-15",
        score: 60
      }
    },
    {
      learner_id: 202,
      assignment_id: 11,
      submission: {
        submitted_at: "2024-03-02",
        score: 110
      }
    },
    {
      learner_id: 202,
      assignment_id: 12,
      submission: {
        submitted_at: "2024-04-11",
        score: 75
      }
    }
  ];
  
  // Function to get learner data
  function getLearnerData(course, assignmentGroup, submissions) {
      // Step 1: Validate that the AssignmentGroup belongs to the CourseInfo
      if (assignmentGroup.course_id !== course.id) {
          throw new Error(`Assignment group ${assignmentGroup.id} does not belong to course ${course.id}`);
      }
  
      const results = [];
  
      // Step 2: Filter assignments by due date
      const validAssignments = assignmentGroup.assignments.filter(assignment => new Date(assignment.due_at) <= new Date());
  
      // Step 3: Process each learner's submissions
      const learnerIds = [...new Set(submissions.map(sub => sub.learner_id))];
  
      learnerIds.forEach(learnerId => {
          const learnerData = {
              id: learnerId,
              avg: 0
          };
  
          let totalWeightedScore = 0;
          let totalPointsPossible = 0;
  
          validAssignments.forEach(assignment => {
              const submission = submissions.find(sub => sub.learner_id === learnerId && sub.assignment_id === assignment.id);
  
              if (submission) {
                  const score = submission.submission.score;
                  let points = assignment.points_possible;
  
                  // Step 4: Apply late penalty if applicable
                  if (new Date(submission.submission.submitted_at) > new Date(assignment.due_at)) {
                      points *= 0.9; // Deduct 10% of the possible points
                  }
  
                  // Calculate the percentage and add to the learner's data
                  const percentage = score / assignment.points_possible;
                  learnerData[assignment.id] = percentage;
  
                  // Calculate the weighted score
                  totalWeightedScore += score;
                  totalPointsPossible += points;
              }
          });
  
          // Calculate the weighted average
          learnerData.avg = totalWeightedScore / totalPointsPossible;
  
          results.push(learnerData);
      });
  
      return results;
  }
  
  // Test the function
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);
  
