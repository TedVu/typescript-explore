interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = "ted";
  courseGoal.description = "kevin";
  courseGoal.completeUntil = new Date();

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Ted", "Kevin"];
// cannot do this
// names.push('Mia');
