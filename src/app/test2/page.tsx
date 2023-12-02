'use client';
import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

type ButtonProps = {
  color: string;
  $backgroundColor: string;
};

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.$backgroundColor};
  border: ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;x
`;

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  );
};

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`;

const Text = styled.span`
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  margin: ${(props) => props.theme.space.large};
`;

const Page: NextPage = () => {
  return (
    <div>
      <Button $backgroundColor='transparent' color='#FF0000'>
        Hello
      </Button>
      <Button $backgroundColor='#1E90FF' color='white' as='a'>
        Hello
      </Button>
      <div>
        <StyledLink href='/'>요기를 클릭해주세요.</StyledLink>
      </div>
      <Text>리우똥꼬를 클릭하세요.</Text>
    </div>
  );
};

export default Page;
