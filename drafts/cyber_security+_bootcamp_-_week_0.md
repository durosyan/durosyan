---
title: 'Cyber Security+ Bootcamp - Week 0'
# date: '2025-01-16'
tags: 'cyber security, hacking, privacy'
---

Cohort 1002

- Certification: [Cyber Security+](https://www.comptia.org/certifications/security)
- Learning Provider: [Digitise.tech](https://digitise.tech/courses/cyber-security-bootcamp/)
- Resources: [Google Drive](https://drive.google.com/drive/folders/1i8OAdC0RUn44lOsn0GLfV6PmynM7pqPT?usp=sharing)

Cost: £749 (includes certification)

---

# Network Security

Implicit trust
Internal network zones

## DMZ/Screened Subnets

DMZ is also known as a screened subnet. potentially provides pivot point for an attack on internal services.

## External Network Zone

If there is only one router then it can become a single point of failure. consider other architectures.

Network architecture has big effect on security of network.

## Deception technology

It might be better to gather information about the attacker, learning who they are to better stop them.

Digital decoys (honey pots) provide a good way to safely observe the attacker.

**Benefits**

- Gathering threat intelligence
- Reduces false positives
- Early threat detection

**Challenges**

- Resource intensive - people and equipment
- False positives
- Legal and ethics considerations

**Types of honeypots**

- research
- production

**Honey nets**

- Bigger testing ground for studying malicious activity
- More realistic
- More scalable
- Segmentation
- Monitoring and analysis (IOC)


**Honey tokens**

- fake or decoy credentials
- left a card on a receiptionists desk for example
- api credentials left out in the open
- general admin account that gets monitored if used

**Benefits**

- Early threat detection
- Insider threat detection
- Lure and deterrant
- Threat intelligence

**Challenges**

- realism
- false positives

**Honey Files**

- Decoy files
- Lure and bait

All trigger alerts in IDS or SIEM systems

Can be mixed in with real data and networks to create realism

## Disruption technology

Actively disrupting and fighting back

- Active defense measures 
- Dynamic network segmentation (pulling network connectivity if attacked)
- Isolation and containment

**Benefits**

- Delaying harm
- Minimises damage
- Frustrates attempts

**Challenges**

- Overhead and complexity
- False positives
- Adverserial adaptation

### Fake information

- Fake accounts (to monitor data breaches)
- DNS sinkholes

## CIA

- Confidentiality
- Integrity 
- Availability

## AAA

- Authentication
- Authorization
- Accounting

## Other things

- Non repudiation
- Gap analysis

## Zero trust

never trust - always verify

- Control plane
- Data plane

## Physical security

- Locks
- Doors

---

# Change management

- Reverse engineering who broke what and when it broke
- Business impact
- Tech implications
- Documentation
- Change happens and it is risky
- Change management allows for control of the changes in a structured manner
- Change can encounter resistance

### Change Advisory Board (CAB)

- Aligned with organisations goals
- Potential impact on business operations
- Acts as a safeguard
- Can have pre approved change process for smaller changes
- Act as custodians of cyber security

**Risk assessments**

- risk and mitigation
- risk of not doing change and risk of doing change

Difficult to align business and security objectives

More hurdles for people to jump through.

Disruption is mitigated through CAB

**Open communication is key**

- Top down change - led by leadership, 
- Bottom up change - led by users/developers

**Process**

- *Change request* (includes detail of potential risks and benefits, who's involved etc.) should be written with consideration of all parties.
- *Change evaluation and assessment* (predefined criteria, might include risk analysis, vulnerability assessments)
- *Prioritisation and categorisation* (process, urgency, importance, potential impact. emergeny, minor, standard depends)
- *Approval / Rejection* (formal signoff)
- *Communication and documentation* (scope of change, what has been changed, implementation plan, associated security considerations)
- Monitoring and review (changes are according to plan, effectiveness, lessons learnt, improvements)

**Ownership**

- Not typically person who submitted change request,
- Would be a member of CAB or Leadership
- Might be a CISO

**Types of ownership**

- Role based ownership
- Asset based ownership
- Risk ownership
- Compliance ownership (regulations, GDPR, Cyber essentials+, ISO 27001)
- Cultural ownership (priority and awareness, sets the tone)

## Stakeholders

- Consider all perspectives
- Communication is key

**Senior management**

- Holds responsibility for stakeholder comms

**IT Teams and Security proffesionals**

- Implementations

**Employees and users**

- This is who the change effects

**Customers and clients**

- Trusted information held about customers

**Regulatory bodies and compliance auditors**

- Remain ethical and legal


**Third party vendors, contractors**

- External data providers, equipment providers etc.

**Industry associations and information sharing forums**

- Collaboration

**Suppliers**

- Creditors

## Impact Analysis

- Analysis of the change