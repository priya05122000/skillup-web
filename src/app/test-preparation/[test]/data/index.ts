import sat from './sat';
import gre from './gre';
import { ExamData } from '../examData';
import gmat from './gmat';
import oet from './oet';
import toefl from './toefl';
import ielts from './ielts';
import pte from './pte';

const testData :Record<string, ExamData> = {
  sat,
  gre,
  gmat,
  oet,
  toefl,
  ielts,
  pte,
};

export default testData;