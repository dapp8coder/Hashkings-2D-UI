import React from "react";
import { gardenNames, seedNames } from "../service/HashkingsAPI";
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import SvgIcon from '@material-ui/core/SvgIcon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
//import GiftSeed from "./GiftSeed";
import _ from "lodash";

function FarmIcon(props) {
  return (
    <SvgIcon viewBox="0 -21 503.99257 503" {...props}>
      <path d="m364.976562 162.460938v-157.964844h-55.878906v97.914062l-91.105468-97.914062-213.992188 229.984375h67.011719v223.023437h293.964843v-223.023437h67.011719zm0 0" fill="#f4efed"/><path d="m4 234.480469h35.355469l178.636719-229.984375zm0 0" fill="#fff"/><path d="m431.988281 234.480469h-35.355469l-178.640624-229.984375zm0 0" fill="#d6d1cf"/><path d="m346.710938 457.503906h18.265624v-223.023437h-2.921874c-8.476563 0-15.347657 6.871093-15.347657 15.347656v207.675781zm0 0" fill="#d6d1cf"/><path d="m88.726562 457.503906h-18.265624v-223.023437h2.921874c8.476563 0 15.347657 6.871093 15.347657 15.347656v207.675781zm0 0" fill="#fff"/><path d="m364.976562 461.503906h-293.964843c-2.207031 0-4-1.792968-4-4v-219.023437h-63.011719c-1.59375 0-3.03125-.941407-3.667969-2.402344-.632812-1.457031-.3437498-3.15625.738281-4.320313l213.996094-229.984374c1.511719-1.628907 4.34375-1.628907 5.855469 0l84.179687 90.464843v-87.742187c0-2.207032 1.789063-4 4-4h55.875c2.207032 0 4 1.792968 4 4v156.390625l65.9375 70.871093c1.085938 1.164063 1.378907 2.859376.742188 4.320313s-2.078125 2.402344-3.667969 2.402344h-63.011719v219.023437c0 2.207032-1.789062 4-4 4zm-289.964843-8h285.964843v-219.023437c0-2.207031 1.792969-4 4-4h57.824219l-60.753906-65.292969c-.6875-.738281-1.070313-1.714844-1.070313-2.722656v-153.96875h-47.875v93.914062c0 1.640625-1.007812 3.121094-2.539062 3.71875-1.53125.601563-3.273438.210938-4.390625-.996094l-88.179687-94.765624-204.804688 220.113281h57.824219c2.207031 0 4 1.792969 4 4zm0 0" fill="#690589"/><path d="m120.769531 136.472656c-.976562 0-1.957031-.351562-2.722656-1.070312-1.621094-1.503906-1.710937-4.035156-.207031-5.652344l22.332031-24c1.511719-1.621094 4.042969-1.707031 5.652344-.207031 1.621093 1.503906 1.710937 4.039062.207031 5.65625l-22.332031 24c-.789063.84375-1.859375 1.273437-2.929688 1.273437zm0 0" fill="#690589"/><path d="m272.503906 286.519531h-109.019531c-5.042969 0-9.132813 4.089844-9.132813 9.132813v161.855468h127.285157v-161.855468c0-5.046875-4.089844-9.132813-9.132813-9.132813zm0 0" fill="#fcc24c"/><path d="m272.503906 286.519531h-10.960937c5.042969 0 9.132812 4.089844 9.132812 9.132813v161.855468h10.960938v-161.855468c0-5.046875-4.089844-9.132813-9.132813-9.132813zm0 0" fill="#dea42e"/><path d="m163.484375 286.519531h10.960937c-5.046874 0-9.136718 4.089844-9.136718 9.132813v161.855468h-10.957032v-161.855468c0-5.046875 4.089844-9.132813 9.132813-9.132813zm0 0" fill="#fce06a"/><path d="m281.636719 461.503906h-127.285157c-2.207031 0-4-1.792968-4-4v-161.851562c0-7.242188 5.890626-13.132813 13.132813-13.132813h109.019531c7.242188 0 13.132813 5.890625 13.132813 13.132813v161.851562c0 2.207032-1.789063 4-4 4zm-123.285157-8h119.285157v-157.851562c0-2.832032-2.300781-5.132813-5.132813-5.132813h-109.019531c-2.828125 0-5.128906 2.300781-5.128906 5.132813v157.851562zm0 0" fill="#690589"/><path d="m185.378906 376.726562c0 5.09375-4.128906 9.21875-9.21875 9.21875-5.09375 0-9.21875-4.125-9.21875-9.21875 0-5.089843 4.125-9.214843 9.21875-9.214843 5.089844 0 9.21875 4.125 9.21875 9.214843zm0 0" fill="#7bac51"/><path d="m176.160156 389.945312c-7.289062 0-13.214844-5.929687-13.214844-13.21875 0-7.285156 5.929688-13.214843 13.214844-13.214843 7.289063 0 13.21875 5.929687 13.21875 13.214843 0 7.289063-5.929687 13.21875-13.21875 13.21875zm0-18.433593c-2.875 0-5.214844 2.339843-5.214844 5.214843 0 2.878907 2.339844 5.21875 5.214844 5.21875s5.21875-2.339843 5.21875-5.21875c0-2.875-2.339844-5.214843-5.21875-5.214843zm0 0" fill="#690589"/><path d="m424.636719 373.457031c-2.207031 0-4-1.789062-4-4 0-2.207031 1.792969-4 4-4 .40625 0 .734375-.328125.734375-.734375v-38.234375c0-2.207031 1.792968-4 4-4 2.207031 0 4 1.792969 4 4v38.234375c.003906 4.816406-3.914063 8.734375-8.734375 8.734375zm0 0" fill="#690589"/><path d="m466.109375 330.277344c15.09375-2.328125 27.6875-8.074219 33.890625-14.679688-7.902344-4.429687-21.644531-6.117187-36.738281-3.789062-1.628907.25-3.21875.550781-4.785157.875 3.660157-2.808594 7.308594-5.992188 10.847657-9.53125 13.535156-13.535156 22.011719-28.679688 23.390625-39.953125-11.273438 1.378906-26.417969 9.855469-39.953125 23.390625-4.65625 4.65625-8.699219 9.503906-12.074219 14.316406 2.308594-9.355469 3.621094-20.074219 3.621094-31.480469 0-24.410156-6.011719-45.710937-14.933594-57.117187-8.925781 11.40625-14.933594 32.707031-14.933594 57.117187 0 11.40625 1.308594 22.125 3.617188 31.480469-3.375-4.8125-7.417969-9.660156-12.074219-14.316406-13.535156-13.535156-28.675781-22.011719-39.949219-23.390625 1.375 11.273437 9.851563 26.417969 23.386719 39.953125 3.539063 3.539062 7.1875 6.722656 10.847656 9.53125-1.566406-.328125-3.15625-.625-4.785156-.875-15.09375-2.328125-28.835937-.640625-36.738281 3.789062 6.203125 6.605469 18.796875 12.351563 33.890625 14.679688 6.898437 1.0625 13.503906 1.277344 19.410156.785156-1.484375.890625-2.976563 1.875-4.449219 2.957031-7.808594 5.722657-13.214844 12.640625-14.773437 18.167969 5.742187.183594 13.96875-2.890625 21.777343-8.613281 7.207032-5.28125 12.359376-11.574219 14.335938-16.863281.117188-.0625.242188-.117188.355469-.183594.027343.003906.054687.011718.082031.011718.027344-.003906.054688-.007812.082031-.011718.113281.066406.242188.121094.355469.183594 1.980469 5.289062 7.128906 11.582031 14.335938 16.863281 7.8125 5.722656 16.035156 8.792969 21.777343 8.613281-1.554687-5.527344-6.960937-12.445312-14.773437-18.167969-1.472656-1.082031-2.960938-2.066406-4.445313-2.957031 5.898438.496094 12.503907.277344 19.402344-.785156zm0 0" fill="#7bac51"/><path d="m465.4375 356.195312c-6.800781 0-15.582031-3.480468-23.65625-9.394531-5.15625-3.777343-9.445312-8.109375-12.410156-12.457031-2.960938 4.347656-7.25 8.679688-12.40625 12.457031-8.316406 6.09375-17.332032 9.574219-24.265625 9.386719-1.230469-.042969-2.375-.644531-3.101563-1.636719-.726562-.992187-.957031-2.261719-.625-3.445312 1.445313-5.132813 5.414063-10.839844 10.996094-15.988281-2.617188-.179688-5.265625-.476563-7.945312-.890626-15.574219-2.398437-29.109376-8.339843-36.199219-15.890624-.839844-.898438-1.222657-2.132813-1.035157-3.347657.183594-1.214843.921876-2.277343 1.996094-2.878906 7.359375-4.125 18.464844-5.941406 30.761719-5.179687-.320313-.316407-.640625-.628907-.960937-.949219-13.8125-13.8125-22.984376-29.625-24.53125-42.292969-.148438-1.222656.273437-2.445312 1.144531-3.3125.867187-.871094 2.085937-1.289062 3.308593-1.144531 12.671876 1.546875 28.480469 10.71875 42.296876 24.535156.886718.886719 1.757812 1.785156 2.609374 2.695313-.648437-5.546876-.980468-11.277344-.980468-17.03125 0-24.675782 5.898437-46.953126 15.785156-59.582032.757812-.96875 1.917969-1.539062 3.148438-1.539062 1.230468 0 2.390624.566406 3.152343 1.539062 9.878907 12.628906 15.78125 34.90625 15.78125 59.582032 0 5.753906-.332031 11.484374-.984375 17.03125.855469-.910157 1.722656-1.808594 2.613282-2.695313 13.8125-13.816406 29.625-22.988281 42.292968-24.535156 1.230469-.148438 2.445313.273437 3.3125 1.144531.871094.871094 1.292969 2.089844 1.140625 3.3125-1.542969 12.667969-10.710937 28.480469-24.53125 42.292969-.316406.316406-.636719.632812-.957031.945312 12.285156-.761719 23.398438 1.054688 30.761719 5.179688 1.074219.601562 1.808593 1.664062 1.996093 2.878906.1875 1.21875-.195312 2.453125-1.039062 3.347656-7.085938 7.550781-20.621094 13.496094-36.195312 15.894531-2.679688.414063-5.328126.707032-7.945313.886719 5.582031 5.148438 9.550781 10.859375 10.992187 15.988281.335938 1.183594.105469 2.457032-.621093 3.449219-.730469.992188-1.871094 1.59375-3.101563 1.632813-.1875.007812-.394531.011718-.597656.011718zm-53.390625-29.128906c1.722656 0 3.269531 1.113282 3.804687 2.777344.566407 1.769531-.15625 3.699219-1.753906 4.65625-1.402344.839844-2.796875 1.765625-4.140625 2.75-3.992187 2.925781-7.457031 6.335938-9.890625 9.632812 3.878906-1.328124 8.171875-3.605468 12.167969-6.53125 6.324219-4.632812 11.164063-10.253906 12.957031-15.039062.335938-.902344.988282-1.652344 1.839844-2.113281.039062-.023438.25-.132813.292969-.152344.414062-.207031.929687-.375 1.441406-.457031h.007813c.039062-.003906.085937-.011719.125-.015625l.09375-.015625c.816406-.09375 1.644531.066406 2.367187.457031l.355469.183594c.851562.460937 1.503906 1.210937 1.839844 2.113281 1.792968 4.785156 6.632812 10.40625 12.957031 15.039062 3.992187 2.925782 8.289062 5.203126 12.167969 6.53125-2.4375-3.292968-5.898438-6.707031-9.894532-9.632812-1.339844-.984375-2.734375-1.910156-4.136718-2.75-1.597657-.957031-2.324219-2.882812-1.753907-4.65625.566407-1.773438 2.296875-2.902344 4.140625-2.761719 5.765625.476563 12.148438.214844 18.464844-.757812 10.664062-1.644531 20.378906-5.148438 26.894531-9.550781-7.542969-2.238282-17.859375-2.652344-28.523437-1.007813-1.554688.238281-3.078125.523437-4.574219.835937-1.824219.382813-3.675781-.550781-4.457031-2.246093-.777344-1.695313-.28125-3.707031 1.203125-4.839844 3.617187-2.78125 7.132812-5.871094 10.453125-9.1875 10.324218-10.324219 17.960937-22.039063 20.992187-31.898437-9.859375 3.03125-21.574219 10.667968-31.898437 20.992187-4.351563 4.355469-8.265625 8.992187-11.625 13.785156-1.105469 1.578125-3.179688 2.140625-4.929688 1.34375-1.753906-.792969-2.691406-2.726562-2.226562-4.597656 2.292968-9.285156 3.5-19.839844 3.5-30.523437 0-19.730469-4.109375-38.195313-10.933594-49.957032-6.824219 11.761719-10.933594 30.222656-10.933594 49.957032 0 10.675781 1.207032 21.230468 3.5 30.523437.460938 1.871094-.472656 3.800781-2.226562 4.597656s-3.824219.234375-4.929688-1.34375c-3.363281-4.789062-7.277344-9.429687-11.628906-13.785156-10.324219-10.324219-22.035156-17.960937-31.894531-20.992187 3.03125 9.859374 10.664062 21.574218 20.988281 31.898437 3.320312 3.316406 6.839844 6.410156 10.457031 9.1875 1.480469 1.136719 1.980469 3.148437 1.199219 4.84375-.777344 1.695313-2.628906 2.628906-4.453125 2.246094-1.496094-.3125-3.019531-.597657-4.574219-.839844-10.667968-1.640625-20.980468-1.226563-28.523437 1.007813 6.519531 4.40625 16.226562 7.910156 26.890625 9.554687 6.320312.972656 12.707031 1.234375 18.46875.753906.109375-.011719.222656-.015625.332031-.015625zm0 0" fill="#690589"/><path d="m469.4375 384.417969h-80.128906c-5.761719 0-10.433594-4.671875-10.433594-10.433594s4.671875-10.433594 10.433594-10.433594h80.128906c5.757812 0 10.429688 4.671875 10.429688 10.433594s-4.671876 10.433594-10.429688 10.433594zm0 0" fill="#fcc24c"/><path d="m448.082031 457.503906h-37.421875c-6.386718 0-11.855468-4.570312-12.992187-10.855468l-11.238281-62.230469h85.878906l-11.238282 62.230469c-1.132812 6.285156-6.601562 10.855468-12.988281 10.855468zm0 0" fill="#fcc24c"/><path d="m460.023438 384.417969-11.238282 62.230469c-1.136718 6.285156-6.605468 10.855468-12.992187 10.855468h12.289062c6.386719 0 11.855469-4.570312 12.992188-10.855468l11.238281-62.230469zm0 0" fill="#dea42e"/><path d="m398.722656 384.417969 11.238282 62.230469c1.136718 6.285156 6.605468 10.855468 12.992187 10.855468h-12.292969c-6.382812 0-11.851562-4.570312-12.988281-10.855468l-11.238281-62.230469zm0 0" fill="#fce06a"/><path d="m469.4375 363.554688h-12.292969c5.761719 0 10.433594 4.667968 10.433594 10.429687 0 5.765625-4.671875 10.433594-10.433594 10.433594h12.292969c5.757812 0 10.429688-4.667969 10.429688-10.433594 0-5.761719-4.671876-10.429687-10.429688-10.429687zm0 0" fill="#dea42e"/><path d="m389.308594 384.417969h12.289062c-5.761718 0-10.433594-4.671875-10.433594-10.433594s4.671876-10.433594 10.433594-10.433594h-12.289062c-5.761719 0-10.433594 4.671875-10.433594 10.433594.003906 5.761719 4.671875 10.433594 10.433594 10.433594zm0 0" fill="#fce06a"/>
    </SvgIcon>
  );
}

function SeedIcon(props) {
  return (
    <SvgIcon viewBox="0 0 45.415 45.416" {...props}>
      <path d="M45.414,38.156c-0.015-0.192-0.048-0.395-0.102-0.594c-0.251-0.926-0.996-1.689-1.918-1.953
			c-1.054-0.304-2.05-0.022-2.747,0.592c-0.555,0.488-1.344,0.457-1.905-0.025c-0.501-0.43-1.151-0.691-1.864-0.691
			s-1.361,0.262-1.861,0.691c-0.487,0.42-1.25,0.42-1.738,0c-0.5-0.432-1.147-0.691-1.86-0.691s-1.365,0.26-1.866,0.691
			c-0.57,0.49-1.362,0.49-1.932,0c-0.502-0.432-1.152-0.691-1.866-0.691c-0.712,0-1.362,0.26-1.863,0.688
			c-0.543,0.466-1.315,0.466-1.859,0c-0.501-0.429-1.151-0.688-1.863-0.688c-0.713,0-1.364,0.26-1.866,0.691
			c-0.571,0.49-1.361,0.49-1.933,0c-0.501-0.432-1.152-0.691-1.866-0.691c-0.709,0-1.356,0.258-1.855,0.684
			c-0.536,0.459-1.301,0.459-1.837,0c-0.499-0.426-1.146-0.684-1.855-0.684c-0.714,0-1.365,0.26-1.866,0.691
			c-0.56,0.48-1.351,0.514-1.904,0.023c-0.697-0.613-1.694-0.895-2.748-0.592c-0.922,0.266-1.667,1.029-1.917,1.957
			c-0.054,0.198-0.087,0.4-0.101,0.592l-0.033,2.938c0,0.9,0.751,1.609,1.651,1.609h41.753c0.899,0,1.623-0.709,1.623-1.609
			L45.414,38.156z"/>
		<path d="M28.929,25.926c-0.342,0.625-0.114,1.409,0.512,1.75c0.625,0.343,1.409,0.112,1.75-0.513
			c0.342-0.625,0.667-2.42,0.042-2.762C30.608,24.06,29.271,25.301,28.929,25.926z"/>
		<path d="M30.128,18.624c0.6,0.384,1.396,0.208,1.78-0.391c0.385-0.6,0.208-1.397-0.392-1.782c-0.6-0.384-2.369-0.831-2.752-0.23
			C28.381,16.822,29.526,18.24,30.128,18.624z"/>
		<path d="M29.707,12.657c0.671,0.24,1.408-0.108,1.648-0.779c0.241-0.671,0.281-2.494-0.39-2.735
			c-0.67-0.24-1.798,1.194-2.038,1.864C28.688,11.678,29.037,12.417,29.707,12.657z"/>
		<path d="M36.36,21.846c0.499-0.508,1.299-2.148,0.791-2.647s-2.133,0.332-2.632,0.84c-0.499,0.508-0.491,1.325,0.018,1.824
			C35.046,22.363,35.862,22.355,36.36,21.846z"/>
		<path d="M34.742,31.21c0.713,0,1.29-0.578,1.29-1.29c0-0.714-0.577-2.443-1.29-2.443c-0.712,0-1.289,1.729-1.289,2.443
			C33.454,30.633,34.03,31.21,34.742,31.21z"/>
		<path d="M40.517,28.529c0.693,0.164,1.388-0.267,1.551-0.959c0.163-0.693-0.267-1.389-0.96-1.552
			c-0.692-0.163-2.51,0.003-2.674,0.696C38.271,27.406,39.822,28.365,40.517,28.529z"/>
		<path d="M11.172,30.863l16.559-8.549L20.394,2.712L2.291,7.136C0.467,7.819-0.458,9.85,0.225,11.674l6.41,17.124
			C7.317,30.621,9.349,31.546,11.172,30.863z M8.25,17.994l1.411-0.528c-0.134-0.125-0.291-0.304-0.474-0.554
			c-0.564-0.77-1.166-1.91-0.978-2.047C8.36,14.754,8.98,15.33,9.51,15.961c0.002-0.133,0.007-0.276,0.016-0.429
			c0.09-1.643,0.537-3.818,0.937-3.796c0.356,0.02,0.557,1.771,0.533,3.313c0.068-0.088,0.138-0.178,0.213-0.271
			c1.408-1.749,3.635-3.807,4.062-3.463c0.365,0.294-0.708,2.252-1.907,3.907c2.549-0.908,5.893-1.598,6.119-0.995
			c0.225,0.603-2.751,2.279-5.269,3.268c1.991,0.46,4.086,1.232,4.003,1.694c-0.096,0.539-3.127,0.45-5.337,0.055
			c-0.118-0.021-0.23-0.042-0.339-0.064c1.03,1.147,2.029,2.6,1.773,2.849c-0.288,0.279-2.052-1.069-3.199-2.248
			c-0.107-0.11-0.205-0.214-0.293-0.314c0.015,0.824-0.075,1.666-0.262,1.682c-0.232,0.019-0.526-1.235-0.606-2.187
			c-0.026-0.308-0.026-0.546-0.006-0.728l-1.411,0.528c-0.211,0.079-0.447-0.028-0.526-0.239C7.931,18.309,8.038,18.073,8.25,17.994
			z"/>
    </SvgIcon>
  );
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  iconHover: {
    '&:hover': {
      color: red[800],
    },
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  extendPaper: {
    color: red[800]
  },
  flex: {
    flexGrow: 1,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#073232",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
  card: {
    maxWidth: 345,
    backgroundColor: "#073232",
  },
  media: {
    height: 140,
  },
  paperFarming: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#073232",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#00211B' }, // custom color in hex 
  },
});

export default function Inventory({user}) {
  const classes = useStyles();
  
  return (
  <div className={classes.flex}>
    
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paperFarming}>
          <ThemeProvider theme={theme}>
            <Typography gutterBottom variant="h5" component="h1">
              <b><font color="DFB17B">Inventory</font></b>
            </Typography>
          </ThemeProvider>
        </Paper>
      </Grid>
      <Grid item xs>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/vAUGcFV.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <center><font color="DFB17B">Active Plots</font></center>
          </Typography>
          <hr/>
          {_.uniqBy(user.activeGardens, garden => garden.id[0])
            .map(garden => ({
              id: garden.id[0],
              count: user.activeGardens.filter(
                agarden => agarden.id[0] === garden.id[0]
              ).length
            }))
            .map(garden => (
              <b><font color="B28D43"><p key={garden.id}>
                <Badge className={classes.margin} badgeContent={garden.count} color="primary">
                  <FarmIcon  />
                </Badge>
                    {gardenNames[garden.id]}
                {garden.count !== 1 ? "" : ""}
              </p></font></b>
            ))}
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2016/04/29195549/cannabis-seeds-101-all-you-need-to-know-and-more.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <font color="DFB17B">Seeds</font>
          </Typography>
          <hr/>
          {_.uniqBy(user.availableSeeds, seed => seed.strain)
            .map(seed => ({
              strain: seed.strain,
              count: user.availableSeeds.filter(
                aseed => aseed.strain === seed.strain
              ).length
            }))
            .map(seed => (
              <p key={seed.strain}><font color="B28D43">
                <Badge className={classes.margin} badgeContent={seed.count} color="primary">
                  <SeedIcon  />
                </Badge>
                 {seedNames[seed.strain]}
                {seed.count !== 1 ? "s" : ""}</font>
              </p>
            ))}
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/x1eOPYj.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <font color="DFB17B">Plots</font>
          </Typography>
          <hr/>
          {_.uniqBy(user.availableGardens, garden => garden[0])
            .map(garden => ({
              id: garden[0],
              count: user.availableGardens.filter(
                agarden => agarden[0] === garden[0]
              ).length
            }))
            .map(garden => (
              <b><p key={garden.id}><font color="B28D43">
                <Badge className={classes.margin} badgeContent={garden.count} color="primary">
                  <FarmIcon  />
                </Badge>
                 {gardenNames[garden.id]}
                {garden.count !== 1 ? "s" : ""}</font>
              </p></b> 
            ))}
        </CardContent>
      </Card>
      
    </Grid>
    </Grid>
    </div>
  );
}
