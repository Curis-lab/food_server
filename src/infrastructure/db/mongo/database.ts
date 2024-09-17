import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

import { execSync } from 'child_process';

//BTrWZ75ZLf48ArjP
//mathnyanlin

function getGitBranchName() {
  try {
    const branchName = execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf-8',
    }).trim();
    return branchName;
  } catch (error: any) {
    console.error('Error getting Git branch name:', error.message);
    return null;
  }
}

const branchName = getGitBranchName();
if (branchName) {
  console.log('Current Git branch:', branchName);
} else {
  console.log('Failed to detect Git branch name');
}

export default async () => {
  try {
    const mongoDb = branchName === 'main' ? '' : process.env.MONGO_URL || '';
    await mongoose.connect(mongoDb);
    console.log('Db connnect!...');
  } catch (ex) {
    console.log(ex);
  }
};
