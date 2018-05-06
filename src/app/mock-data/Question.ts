/** question related model defination*/

export class Domain {
  did: number;
  domain: string;
  weight: number;

  constructor(options: {
    did?: number,
    domain?: string,
    weight?: number,
  } = {}) {
    this.did = options.did;
    this.domain = options.domain;
    this.weight = options.weight || -1;
  }
}

export class Subdomain {
  subdid: number;
  subdomain: string;
  did: number;
  constructor(options: {
    subdid?: number,
    subdomain?: string,
    did?: number,
  } = {}) {
    this.subdid = options.subdid;
    this.subdomain = options.subdomain;
    this.did = options.did || -1;
  }
}

export class Question {
  qid: number;
  label: string;
  hint: string;
  type: string;
  ansOptions: any;
  order: number;
  constructor(options: {
    qid?: number,
    label?: string,
    hint?: string,
    type?: string,
    ansOptions?: any,
    order?: number,
  } = {}) {
    this.qid = options.qid;
    this.label = options.label;
    this.hint = options.hint || '';
    this.type = options.type;
    this.ansOptions = options.ansOptions || {};
    this.order = options.order || -1;
  }
}

export class DomQuestion extends Question {
  domain: string;
  subdomain: string;
  constructor(options: {} = {}) {
    super(options);
    this.domain = options['domain'] || '';
    this.subdomain = options['subdomain'] || '';
  }
}
