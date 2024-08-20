import {
  SpeakerphoneIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import { XClose } from "../Common/ReusableSvgs";

export const DictionaryCard = (props: {
  toggleDictionaryCard: any;
  toggleDictionaryDrawer: any;
  clickedWord: string;
  wordData; // Data from OpenAI API
  wordMeaningLoading: boolean;
}) => {
  if (props.wordMeaningLoading) {
    return (
      <div className="absolute bottom-40 left-[40%] z-10 w-80 items-center justify-between rounded-3xl bg-gray-900 p-5 text-white">
        loading...
      </div>
    );
  }
  if (!props.wordData) {
    return null;
  }

  // const {
  //   wordInTargetLanguage,
  //   wordInEnglish,
  //   definition,
  //   sampleSentences = [],
  //   pronunciation,
  //   partOfSpeech,
  // } = props.wordData;

  return (
    <div className="absolute bottom-40 left-[40%] z-10 w-80 items-center justify-between rounded-3xl bg-gray-900 p-5 text-white">
      <div className="flex flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-500">
            <SpeakerphoneIcon className="h-6 w-6 text-red-500" />
          </div>
          <div
            onClick={props.toggleDictionaryCard}
            className="flex cursor-pointer justify-end"
          >
            <XClose />
          </div>
        </div>
        <div>{props.wordData}</div>
        {/* <div className="mb-2">
          <p className="tag inline-block rounded-full bg-white px-2 text-xs text-red-600">
            NOUN
          </p>
        </div>
        <div className="mb-6 flex gap-5">
          <div>
            <div className="text-sm text-gray-400">Spanish</div>
            <h1 className="text-2xl font-bold">{props.clickedWord}</h1>
          </div>
          <div className="flex flex-col justify-center">
            <ArrowLeftIcon className=" w-4 text-gray-400" />
            <ArrowRightIcon className=" w-4 text-gray-400" />
          </div>
          <div>
            <div className="text-sm text-gray-400">English</div>
            <h2 className="text-xl font-semibold">Faith</h2>
          </div>
        </div>

        <div className="mb-6 text-sm text-gray-200">
          A strong belief in the doctrines of a religion, based on spiritual
          conviction rather than proof.
        </div> */}

        <button
          onClick={() => {
            props.toggleDictionaryDrawer();
            props.toggleDictionaryCard();
          }}
        >
          <div className="text-sm text-red-400">More details...</div>
        </button>
      </div>
    </div>
  );
};
